package tsumami.tsumamijalopy.services;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.server.ResponseStatusException;
import tsumami.tsumamijalopy.data.User;
import tsumami.tsumamijalopy.data.UsersRepository;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;
import java.util.Collections;

@Service
public class AuthBuddy {

    @Autowired
    private UsersRepository usersRepository;
// method to getAndSaveUserFromAuthHeader
    public User getUserFromAuthHeader(String authHeader) {
        //checking for data needed to call api
        if(authHeader == null) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Unauthorized");
        }

        // grab access token
        // parse data that is needed to call api from the auth header data
        String accessToken = getAccessTokenFromHeader(authHeader);
        if(accessToken == null) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Unauthorized");
        }
        // call api using access token to get the user data
        String [] fields = getFieldsFromToken(accessToken);
        if(fields[0] == null) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Unauthorized");
        }

        //parse data received from the api call
        System.out.println("this:1: "+fields);

        System.out.println("this:: "+Arrays.toString(fields));
//        storing fields in user obj
        String email = fields[0];
        String date = fields[1] + "-" + fields[2] + "-" + fields[3];
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-M-dd");
        LocalDate birthdate = LocalDate.parse(date, formatter);

        System.out.println(birthdate);


//        LocalDate localDate = LocalDate.parse(date, formatter);



//  LocalDate date = LocalDate.now();
//  String text = date.format(formatter);
//  LocalDate parsedDate = LocalDate.parse(text, formatter);



        String gender = fields[4];
        //        String photo = fields[1];


        //get user record from database
        User user = usersRepository.findByEmail(email);

        //set data from api return to the database record
        if(user == null) {
            User newUser = new User();
            newUser.setEmail(email);
            newUser.setGender(gender);
            newUser.setBirthdate(birthdate);
//            newUser.setPhoto(photo);

            //save record to the database
            newUser = usersRepository.save(newUser);
            System.out.println("New user added");
//            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Unauthorized");
            return newUser;
        }

//        user.setProfilePic(fields[1]);
        return user;
    }

    private String getAccessTokenFromHeader(String header) {
        String [] parts = header.split(" ");
        if(parts.length != 2) {
            return null;
        }
        if(!parts[0].equalsIgnoreCase("bearer")) {
            return null;
        }
        return parts[1];
    }

    private String [] getFieldsFromToken(String accessToken) {
        String [] fields = new String[6];
        RestTemplate restTemplate = new RestTemplate();

        String uri = "https://people.googleapis.com/v1/people/me?personFields=names,emailAddresses,birthdays,genders,photos&access_token=" + accessToken;
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        HttpEntity<String> entity = new HttpEntity<>("parameters", headers);
        ResponseEntity<?> result = restTemplate.exchange(uri, HttpMethod.GET, entity, String.class);

//        System.out.println(result.getBody());
        JsonObject jo = JsonParser.parseString(result.getBody().toString()).getAsJsonObject();
        System.out.println("jo::"+ jo.toString());
        String email = jo.get("emailAddresses").getAsJsonArray().get(0).getAsJsonObject().get("value").toString().replaceAll("\"", "");

//        String photo = jo.get("photos").getAsJsonArray().get(0).getAsJsonObject().get("url").toString().replaceAll("\"", "");

        String year = jo.get("birthdays").getAsJsonArray().get(0).getAsJsonObject().get("date").getAsJsonObject().get("year").toString();
        String month = jo.get("birthdays").getAsJsonArray().get(0).getAsJsonObject().get("date").getAsJsonObject().get("month").toString();
        String day = jo.get("birthdays").getAsJsonArray().get(0).getAsJsonObject().get("date").getAsJsonObject().get("day").toString();

        String gender = jo.get("genders").getAsJsonArray().get(0).getAsJsonObject().get("value").toString().replaceAll("\"", "");

        fields[0] = email;
        fields[1] = year;
        fields[2] = month;
        fields[3] = day;
        fields[4] = gender;
//        fields[5] = photo;

        return fields;


//        these souts show the date obj broken down this will help us fill in fields for register info
//        System.out.println(jo.get("birthdays").getAsJsonArray().get(0).getAsJsonObject().get("date"));
//        System.out.println(
//        System.out.println();



    }

}

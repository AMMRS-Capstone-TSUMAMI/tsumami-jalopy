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
import java.util.Arrays;
import java.util.Collections;
import java.util.Date;

@Service
public class AuthBuddy {

    @Autowired
    private UsersRepository usersRepository;

    public User getUserFromAuthHeader(String authHeader) {
        if(authHeader == null) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Unauthorized");
        }

        // grab access token
        String accessToken = getAccessTokenFromHeader(authHeader);
        if(accessToken == null) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Unauthorized");
        }
        // assume google auth. get email from google via the access token
        String [] fields = getFieldsFromToken(accessToken);
        if(fields[0] == null) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Unauthorized");
        }
        String email = fields[0];
        System.out.println(Arrays.toString(fields));
        User user = usersRepository.findByEmail(email);
        if(user == null) {
//            String photo = fields[1];
//            LocalDate birthdate = LocalDate.parse(fields[2]);
//            String gender = fields[3];
            User newUser = new User();
            newUser.setEmail(email);
//            newUser.setGender(gender);
//            newUser.setBirthdate(birthdate);
//            newUser.setPhoto(photo);
            newUser = usersRepository.save(newUser);
            System.out.println("New user added");
//            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Unauthorized");
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
        String [] fields = new String[4];
        RestTemplate restTemplate = new RestTemplate();

        String uri = "https://people.googleapis.com/v1/people/me?personFields=names,emailAddresses,birthdays,genders,photos&access_token=" + accessToken;
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        HttpEntity<String> entity = new HttpEntity<>("parameters", headers);
        ResponseEntity<?> result = restTemplate.exchange(uri, HttpMethod.GET, entity, String.class);

//        System.out.println(result.getBody());
        JsonObject jo = JsonParser.parseString(result.getBody().toString()).getAsJsonObject();
//        System.out.println(jo.toString());
        String email = jo.get("emailAddresses").getAsJsonArray().get(0).getAsJsonObject().get("value").toString().replaceAll("\"", "");
//        String photo = jo.get("photos").getAsJsonArray().get(0).getAsJsonObject().get("url").toString().replaceAll("\"", "");
//        String birthday = jo.get("birthdays").getAsJsonArray().get(0).getAsJsonObject().get("date").toString().replaceAll("\"", "");
//        String gender = jo.get("genders").getAsJsonArray().get(0).getAsJsonObject().get("date").toString().replaceAll("\"", "");

        fields[0] = email;
//        fields[1] = photo;
//        fields[2] = birthday;
//        fields[3] = gender;

        return fields;


//        these souts show the date obj broken down this will help us fill in fields for register info
//        System.out.println(jo.get("birthdays").getAsJsonArray().get(0).getAsJsonObject().get("date"));
//        System.out.println(jo.get("birthdays").getAsJsonArray().get(0).getAsJsonObject().get("date").getAsJsonObject().get("year"));
//        System.out.println(jo.get("birthdays").getAsJsonArray().get(0).getAsJsonObject().get("date").getAsJsonObject().get("month"));
//        System.out.println(jo.get("birthdays").getAsJsonArray().get(0).getAsJsonObject().get("date").getAsJsonObject().get("day"));



    }

}

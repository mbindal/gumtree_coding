package tests;

import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.ClientResponse;
import com.sun.jersey.api.client.WebResource;
import net.sf.json.JSONArray;
import net.sf.json.JSONException;
import net.sf.json.JSONObject;
import net.sf.json.JSONSerializer;

import org.junit.Test;
import org.junit.BeforeClass;
import static org.junit.Assert.fail;

import java.util.Random;

public class TestApi {
	 public static final String rest_url = "https://jsonplaceholder.typicode.com";
	 public static String user_id = null;
	 public static Client client = null;
	 public static JSONArray users_jsonOutput = null;
	 
	 @BeforeClass
     public static void setUp() {
		 // Initialize REST Api client and collect random users data
		 client = Client.create();
		 WebResource webResource = client.resource(rest_url +  "/users");
		 ClientResponse response = webResource.accept("application/json")
	         .get(ClientResponse.class);
	
		 if (response.getStatus() != 200) {
			 fail("Failed : HTTP error code : "+ response.getStatus());
		 }
		 try {
			 users_jsonOutput = (JSONArray) JSONSerializer.toJSON(response.getEntity(String.class));
		 } catch (JSONException e) {
	            e.printStackTrace();
	            fail("JSON Exception");
	       }
		 Random rn = new Random();
		 JSONObject users_jsonobj = (
		     (JSONObject)(users_jsonOutput.get(rn.nextInt(users_jsonOutput.size()))));
		 String email_id = users_jsonobj.getString("email");
		 user_id = users_jsonobj.getString("id");
	     System.out.println("Test print random user email address " +
		                    "Success! Random email id is " +  email_id);
     }

	 @Test
	 public void testVerifyValidPostID() {
		 // check all the posts of random user have valid post id
		 String end_point = "/posts?userId=" + user_id;
		 WebResource webResource = client.resource(rest_url + end_point);
		 JSONArray jsonOutput = null;
		 ClientResponse response = webResource.accept("application/json")
	         .get(ClientResponse.class);
	
		 if (response.getStatus() != 200) {
		   fail("Failed : HTTP error code : "+ response.getStatus());
		 }
		 try {
			 jsonOutput = (JSONArray) JSONSerializer.toJSON(response.getEntity(String.class));
		 } catch (JSONException e) {
	            e.printStackTrace();
	       }
		 for(Object js : jsonOutput){
             JSONObject json = (JSONObject) js;
             Integer post_id = (Integer)json.get("id");
             if (!(post_id >=1 && post_id <= 100)) {
            	 fail("Invalid post id range : " + post_id);
             }
         }
		 System.out.println("Test random user have valid post id " +
                            "Success! All post ids have valid range " +
				            "for user id:" + user_id);
	 }

	 @Test
	 public void testPostWithUserID() {
		 // Place a POST api call with the given user id
		 String end_point = "/posts";
		 JSONObject jsonInput = new JSONObject()
				 .element("userId", user_id);
		 WebResource webResource = client.resource(rest_url + end_point);
		 JSONObject jsonOutput = null;
		 ClientResponse response = webResource.accept("application/json")
             .post(ClientResponse.class, jsonInput.toString());
		 try {
			 jsonOutput = (JSONObject) JSONSerializer.toJSON(response.getEntity(String.class));
		 } catch (JSONException e) {
	            e.printStackTrace();
	            fail("JSON exception");
	       }
         Integer post_id = (Integer)jsonOutput.get("id");
         if (post_id <= 0) {
             fail("Invalid post response while placing POST call");
         }
		 System.out.printf("Test Place a POST api call Success! " +
                           "Valid post_id %s created for user id:%s\n", post_id, user_id);
	 }
}

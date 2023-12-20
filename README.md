# LAZY Dev line bot example
## _The example of GCP cloud function (firebase function) as a bot whom receive request and response flex message_

### Before you started and must know  
- Please register https://console.firebase.google.com/ to be able to access cloud functions.  
    - Must use bill plan as blaze to be able to use cloud functions.  
    - Create Billing in GCP and etc..  
- Please register https://developers.line.biz/ to access line developer console.  

### Step  
    1. Create Provider and Channel in line developer console.  
    2. Create project in firebase to use cloud functions.  
    3. install nodejs npm or language that support firebase cloud function.  
    4. install firebase CLI and login with firebase CLI  
        4.1 npm install -g firebase-tools  
        4.2 firebase login  
    5. Create your project and get inside directory  
        5.1 mkdir <your_project>  
        5.2 cd <your_project>  
    6. init firebase cloud fucntions.  
        6.1 firebase init functions  
        6.2 when you what to update firebase of node_module must get inside directory <functions> first  
    7. DO SOMETHING  
    8. Deploy  
        8.1 firebase deploy --only functions  
    9. Use URL generate by cloud functions as webhook URL (low security)
    10. Or use API Gateway to use as a gateway to connect to cloud functions as example file api-gateway.yaml
        10.1 and set invoker as a private. this will set only allow who authenticated by gcp can called
      
  
### REMARK  
Collect line token in .env file  
import { LightningElement,api,wire} from 'lwc';
import getCountofActiveContacts from '@salesforce/apex/Contactcountsforaccountscontroller.getCountofActiveContacts';
import getCountofInActiveContacts from '@salesforce/apex/Contactcountsforaccountscontroller.getCountofInActiveContacts';


export default class ContactCountForAccounts extends LightningElement {

    @api recordId; // Getting the current page record Id using api .
    contactActiveRecords; // Variables to store return vales from apex controller method 
    contactInActiveRecords; //Variables to store return vales from apex controller method.
    errorMessage; // Varibale declared to Capture and Display the error message on the response received on line number 14.
    
    @wire(getCountofActiveContacts,{accId:"$recordId"}) // Calling the apex method along with paramater passing of accId{"$accountId"}
    wiredActiveContact({error,data}) // getting the response for the method called on line number 12 with errors and data 
    { // Data process started here 
        console.log("AccountId:" + this.recordId);
        console.log("Data:"+ data);
        if (data) {// validate whether data is received or not for the callout on line no 14
            this.contactActiveRecords = data; // Assign the received data from line number 14 to the variable decalred 
            this.errorMessage =undefined; // Reset the previous error message if any during the page load to display the data.
        } else if(error){
            this.contactActiveRecords = undefined;
            this.errorMessage = JSON.stringify(error);

        }
     }

     @wire(getCountofInActiveContacts,{accId:"$recordId"}) // Calling the apex method along with paramater passing of accId{"$accountId"}
     wiredInActiveContact({error,data}) // getting the response for the method called on line number 12 with errors and data 
     { // Data process started here 
         if (data) {// validate whether data is received or not for the callout on line no 14
             this.contactInActiveRecords = data; // Assign the received data from line number 14 to the variable decalred 
             this.errorMessage =undefined; // Reset the previous error message if any during the page load to display the data.
         } else if(error){
             this.contactInActiveRecords = undefined;
             this.errorMessage = JSON.stringify(error);

         }
      }

}
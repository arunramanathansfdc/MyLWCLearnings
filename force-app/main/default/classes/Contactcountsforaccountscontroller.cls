public with sharing class Contactcountsforaccountscontroller {
    public Contactcountsforaccountscontroller() {

    }
    @AuraEnabled(cacheable=true)
    public static string getCountofActiveContacts(String accId){

        List<Contact> contIds = [SELECT id,name
                                FROM Contact 
                                WHERE AccountId =:accId
                                AND IsActive__c=true];
    return '' + contIds.size();                            
  }

  @AuraEnabled(cacheable=true)
    public static string getCountofInActiveContacts(String accId){

        List<Contact> contIds = [SELECT id,name
                                FROM Contact 
                                WHERE AccountId =:accId
                                AND IsActive__c=False];
    return '' + contIds.size();

    }
}
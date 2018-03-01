# From-CommerceCloud-To-ServiceCloud

The **From-CommerceCloud-To-ServiceCloud Widget** is an [Oracle Commerce Cloud Service SaaS platform](https://cloud.oracle.com/commerce-cloud), extension that allows an **Oracle Commerce Cloud Service's** user to open a service request on **Oracle Service Cloud**.

## How to use it

You can [download](https://github.com/valdal14/From-CommerceCloud-To-ServiceCloud) the entire project, zip the **widget** folder and the **ext.json** file and upload the **.zip** folder in your **Oracle Commerce Cloud instance**. 

**NOTE:** You need an extension ID, it can be retrieved directly from your **Oracle Commerce Cloud instance**. Once obtained you have to update the **ext.json** file with the new key generated by the platform:

```javascript
{
  "extensionID": "EXTENSIONID-KEY",
  "developerID": "12345678",
  "createdBy": "Valerio D'Alessio",
  "name": "servicerequest",
  "version": 1,
  "timeCreated": "2018-03-01",
  "description": "Open a service request to Oracle Service Cloud"
}
```
**NOTE:** You can use the official [Oracle Commerce Cloud Service Widget Development Guide](http://docs.oracle.com/cd/E65426_01/Cloud.15-3/WidgetDev/html/s0201developacustomwidget01.html) as reference.

## How works

Once you user is logged-in inside your **Oracle Commerce Cloud instance** an 'OPEN A SERVICE REQUEST' button will appear and the user can submit the ticket directly to **Oracle Service Cloud**.

**NOTE:** The extensions allows an **Oracle Commerce Cloud Service's** administrator to setup the configuration/integration between the two platform.


## Sample Screens

![Start](https://github.com/valdal14/From-CommerceCloud-To-ServiceCloud/blob/master/screens/1.PNG?raw=true "From-CommerceCloud-To-ServiceCloud")


![Start](https://github.com/valdal14/From-CommerceCloud-To-ServiceCloud/blob/master/screens/2.PNG?raw=true "From-CommerceCloud-To-ServiceCloud")


![Start](https://github.com/valdal14/From-CommerceCloud-To-ServiceCloud/blob/master/screens/3.PNG?raw=true "From-CommerceCloud-To-ServiceCloud")

## Contribution

You can [download](https://github.com/valdal14/From-CommerceCloud-To-ServiceCloud) the source code and play with it if you want to improve it.

## License

Licence detail about the use of this project is available at the following [URL](https://github.com/valdal14/From-CommerceCloud-To-ServiceCloud/blob/master/LICENSE)
# W18HW-NoSQL

## Table of Contents: 
---
* [Introduction](#Introduction)
* [Links](#Links)
* [Usage](#usage)
* [Contributing] (#Contributing)
* [Testing](#Testing)
* [GIT Profile](#gitprofile)
* [Questions](#questions)

##Introduction

To enable a social network, web application to capture and store information about users, the thoughts that they post, the reactions from other users to those thoughts as well as links to friends on the social platform using APIs to :
- Add & Amend User/User Details
- Add & Amend Thoughts
- Add & Delete Friends
- Add & Delete Reactions 
- Delete Users and Thoughts

##Links

- github : https://github.com/fubzee/W18HW-NoSQL
- Create Users: https://drive.google.com/file/d/1Zbsr397IBA7O2-8QCepjoXvFNLYH4WNl/view
- Create Thoughts: https://drive.google.com/file/d/14t_d-SEhHva-tt6Co24DceeDDiizCOkj/view
- Add Friends:https://drive.google.com/file/d/10WWCZU9HKoj03AEQt19rBp1gml3Xlzzf/view
- Add Reactions: https://drive.google.com/file/d/1KTPeNvzrpBSndsZeHlGNXQxecNprlr02/view
- Updating and Deleting - Part A: https://drive.google.com/file/d/14o5nududUumNQem_DtNp44Hmcu5Y1TZd/view
- Updating and Deleting - Part B: https://drive.google.com/file/d/1hnRthU1RtHx9XiB6BiTqUF5eXsj8OxhJ/view

---

## Usage
---
 The application uses:
 - Express
 - MongoDB
 - Mongoose
 - dayjs (NPM)



## Contributing
---
 If you contribute please refer to the Gitgub link below where you can raise an issue.  

## Testing
---

All tesing of the API routes were done using Insomnia.  The links above porvide videos demonstrating the API functionality:
![image](https://user-images.githubusercontent.com/94102473/162765254-8d7afe0c-da42-4d09-bcee-f75b7361e357.png)

|  **CRUD** 	|        C       	|                                   	|        R1        	|                                   	|       Rn*      	|                                   	|      U     	|                             	|        D       	|                                  	|
|:---------:	|:--------------:	|:---------------------------------:	|:----------------:	|:---------------------------------:	|:--------------:	|:---------------------------------:	|:----------:	|:---------------------------:	|:--------------:	|----------------------------------	|
| User      	| createUser     	| Email Validation is invoked       	| getUsers         	|                                   	|  getSingleUser 	|                                   	| putUser    	| Email Validation is invoked 	| deleteUser     	| Includes the removal of thoughts 	|
| Friends   	| addFriend      	|  Increments the Virtual Counter                                	|                  	|                                   	|                	|                                   	|            	|                             	| deleteFriend   	|                                  	|
| Thoughts  	| createThought  	| Includes reformatted display date 	| getSingleThought 	| Includes reformatted display date 	| getThoughts    	| Includes reformatted display date 	| putThought 	|                             	| deleteThought  	|                                  	|
| Reactions 	| createReaction 	| Increments the Virtual Counter    	|                  	|                                   	|                	|                                   	|            	|                             	| deleteReaction 	|                                  	|
|           	|                	|                                   	|                  	|                                   	|                	|                                   	|            	|                             	|                	|                                  	|

*n-many
## GIT Profile :link:
--- 
For details around other work please see : https://github.com/fubzee

### Questions :question:
---
* If you have any questions about this application please email me at fubzee @gmail.com

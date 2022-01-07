# Dynamic-databases
# Dynamic-Databases
This is an dynamic table creation app made by Anushka Lalwani as the final project of Walkover University Program. 
It can be used to collect all your user data and manage them

#  TechStack
- React.JS -Frontend library used in the project.
- Redux - Used in addition to React.JS

# Features:
- Signup and login with google via authO
- option to create multiple tables
- There are 3 modules: column creation module, table entry module and table view module

 ### Column Creation Module - create columns here

- This would be a form with 2 fields - (i) column name and (ii) column type

- The column name is a text entry field and the column type is dropdown with 3 values - date, number, string, boolean  and multiselect

- If the user selects multiselect, there will be another text box that appears, where the user can enter the list of values that appears in the multiselect separated by comma’s - E.g. chennai, delhi, mumbai

- The user can create multiple columns and click on submit

  ### Table entry module - create rows here

- The columns created above will be displayed in a table interface with the column names above as headers

  There will be 20 default rows to enter the values for the table(navigation is set between the cells, on pressing of the right arrow move towards the next cell and so on)

  The validations for column will depend on the column type - E.g. date column, we can only pick date, number column only enter number ,string column can string, boolean column   can pick only true or false and multiselect - can select only from the the list of values mentioned

- The user can fill multiple rows and then click on submit

 ### Table View module - view the table here

    The submitted rows above can be viewed in a datatable.

# Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites
Node.JS and npm must be installed. Download and install them from [here] (https://nodejs.org/en/)

## Installing
Follow these steps to run this project in your local computer.

$ git clone https://github.com/anu69/dynamic-table.git
$ cd dynamic-table

Now run :
$ npm install

To run the app on port 3000, run:
$ npm start

# CI/CD pipeline

1. Create a GitHub repository. You may initialize it with a README, license, .gitignore

2. Install git via terminal

   (On Ubuntu you can do sudo apt-get install git)

3. Then do a git clone of your repository, or simply download the zip file of your repository from GitHub and extract it.

4. Copy your java project in the new folder created after cloning (its name will be same to that of the repository you cloned).

5. Add all the changes you want.

6. Then execute these commands:

![image](https://user-images.githubusercontent.com/63070167/148403238-2cf15dde-4ae0-47bf-b1f3-2b106b00db1f.png)

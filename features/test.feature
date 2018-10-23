Feature: Verifying CRUD options in Computer Database
    As an admin of Computer Database
    I should be able to create , read , update and delete computer in the computer database
    so that I can manage computer database

        Scenario Outline: Adding a new Computer
        Given I open Computer database application as an admin
        When I add new computer
        And I add computer with name as - "<name>"
        And Introducing date as - "<introDate>"
        And Discontinued date as - "<discontinuedate>"
        And company as - "<companyName>"
        And I created this new computer
        Then computer with name - "<name>" should have been added

        Examples:
        | name    | introDate  | discontinuedate | companyName |
        | Jain1   | 2017-06-20 | 2020-06-20      | RCA         |
        | Jain2   | 2017-05-20 | 2020-05-20      | IBM         |
            

        Scenario Outline: Searching and Verifying details of an existing Computer
        Given I open Computer database application as an admin
        And I create computer with details - "<name>", "<introDate>","<discontinueDate>" and "<companyName>"  
        When I search existing computer - "<name>"
        Then Computer name should be - "<name>" 
        And Introducing date should be - "<introDate>" 
        And Discontinued date should be - "<discontinueDate>"
        And Company name should be - "<companyName>"
        
        Examples:
        | name    | introDate  | discontinueDate | companyName |
        | Jain3   | 2017-06-20 | 2020-06-20      | RCA         |
        | Jain4   | 2017-05-20 | 2020-05-20      | IBM         |
        
        Scenario Outline: Editing an existing Computer
        Given I open Computer database application as an admin
        And I create computer with details - "<computerName>", "<introDate>","<discontinueDate>" and "<companyName>"  
        When I search existing computer - "<computerName>"
        And I open the computer details for computer - "<computerName>"
        And I edit name as - "<newName>" 
        And I edit Introducing date as - "<newIntroDate>" 
        And I edit Discontinued date as - "<newDiscontinueDate>" 
        And I saved this existing computer
        Then computer should be saved with new details - "<newName>", "<newIntroDate>" and "<newDiscontinueDate>"

        Examples:
        | computerName | newName | introDate  | discontinueDate | companyName | newIntroDate | newDiscontinueDate |
        | Jain5        | Jain55  | 2017-06-19 | 2020-06-19      | RCA         | 2018-06-19   | 2021-06-19         |           

       Scenario Outline: Deleting an existing Computer
        Given I open Computer database application as an admin
        And I create computer with details - "<computerName>", "<introDate>","<discontinueDate>" and "<companyName>"
        When I search existing computer - "<computerName>"
        And I open the computer details for computer - "<computerName>"
        And I delete the computer
        Then computer - "<computerName>" should be deleted

        Examples:
        | computerName | introDate  | discontinueDate | companyName |
        | Jain88       | 2017-06-19 | 2020-06-19      | RCA         |        
        | Jain77       | 2017-05-19 | 2020-05-19      | IBM         |

/**

Database Schema

CREATE TABLE JOB_BOOKMARK(
	ID SERIAL PRIMARY KEY, 
	COMPANY TEXT NOT NULL, 
	POSITION TEXT NOT NULL, 
	CITY TEXT,
	STATE TEXT, 
	COUNTRY TEXT,
	JOB-PLATFORM TEXT NOT NULL,
	DESCRIPTION TEXT,
	REQUIREMENTS TEXT,
	JOB-STATUS TEXT NO NULL,
);
	
	Example JSON data
{
 		company: "Snapchat",
 		position: "Software Engineer",
 		city: "Venice Beach",
 		states: "CA",
 		country: "United States",
 		job-platform: "Indeed",
 		description: "Snapchat is the best place to work at !",
 		requirments: "4 years of software engineering experience"
}

**/

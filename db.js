/**

Database Schema

CREATE TABLE JOB_BOOKMARK(
	ID SERIAL PRIMARY KEY, 
	COMPANY TEXT NOT NULL, 
	ROLE TEXT NOT NULL, 
	CITY TEXT,
	STATE TEXT, 
	COUNTRY TEXT,
	JOB_PLATFORM TEXT NOT NULL,
	DESCRIPTION TEXT,
	REQUIREMENTS TEXT,
    POSTING_DATE DATE NOT NULL DEFAULT CURRENT_DATE,
	JOB_STATUS TEXT NOT NULL
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
const config = require('./config');
const pg = require('pg')
// db connection
const client = new pg.Client(config.development.url)

const connect = () => {
	client.connect((err, res) => {
		if(err){
			return console.log('Connection Failure')
		}else{
			console.log('Connected to ' + res.database)
		}
	})
}
/**
	publishJob(jsonData, callback)

	jsonData - Object with JSON data from form data
	callback - returns either a callback with an error callback(err, null)
	or a callback with 

**/
const publishJob = (jsonData, callback) => {
	const values = []
	DEFAULT_JOB_STATUS = 'Applied'
	jsonData['job_status'] = DEFAULT_JOB_STATUS


	for(const prop in jsonData){
		values.push(jsonData[prop])
	}

	console.log(values)
	const textQuery = 'INSERT INTO JOB_BOOKMARK(company, role, city, state, country, job_platform, description, requirements, job_status) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)'

	client.query(textQuery, values, (err, res) => {
		if(err){return callback(err, null)}
		else{
			console.log(res.rows[0])
			callback(null, res)
		}
	})
}

const fetchAllJobs = (callback) => {
	const fetchQuery = 'SELECT * FROM JOB_BOOKMARK'
	client.query(fetchQuery, (err, res) => {
		if(err) { return callback(err, null) }
		callback(null, res.rows)
	})
}

module.exports = {connect, publishJob, fetchAllJobs}



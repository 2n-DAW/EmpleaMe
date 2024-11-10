#!/bin/bash
mongorestore --host localhost --port 27017 -u root -p secret --authenticationDatabase admin --db mydb /dump/mydb
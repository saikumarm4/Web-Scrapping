# Web-Scrapping

## 1. Stock Sector

The attempt is to pull the sector information of stocks, in blocks of any size, and print as a csv. 
It using `fetch` api to extract `https://www.nseindia.com/api/quote-equity` json object and parse through it.

A dictionary is build with stock symbol as key and corresponding sector, industry and basicIndustry as values.

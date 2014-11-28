NetflowCollector
=================

[Roberto Eduardo Zubieta] [3] (Panama City, Panamá)

Synopsis
--------
This is a simple collector that parses NetflowV9 packages and saves them to a MongoDB database. It also includes an API to query the database and a simple website that allows administrators to check the available data.

Usage
------
**Requires [NodeJS] [1] installed on your computer.** Once cloned into your computer execute the following command to install all the dependencies:

	npm install

After a few seconds of download the application should be operational. 

### Running the Collector

In order to run run the collector execute the following command:

	npm run startCollector

### Running the Webserver

To run both the API and the website execute the following command:

	npm run startApi

License
-------
MIT

Acknowledgements
----------------

* Sghazzawi for his [Node-Netflowd] [2] library.



[1]: http://nodejs.org/
[2]: https://github.com/Sghazzawi/Node-Netflowd
[3]: https://plus.google.com/u/0/105524772414753584405

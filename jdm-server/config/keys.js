module.exports = {
    mongoURI: process.env.MONGODB_URI || "mongodb://localhost:27017/JDM",
    API: "/api/",
    JDMServerXML:
        "http://www.jeuxdemots.org/rezo-xml.php?gotermsubmit=Chercher&output=onlyxml&gotermrel=",
    JDMServerPref:
        "http://www.jeuxdemots.org/rezo-dump.php?gotermsubmit=Chercher&gotermrel=",
    JDMServerSufx: "&rel=?gotermsubmit=Chercher&gotermrel=",
};

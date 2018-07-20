var dns = require('dns');

dns.lookup('ngs.ru', function (err, ip) {
    if(err) throw err;
    console.log('ngs.ru ip is: ' + ip);
});

dns.reverse('173.255.206.103', function (err, domains) {
    if(err) throw err;
    console.log('173.255.206.103 have names');
    domains.forEach(function (domain) {
        console.log(domain);
    })
});

dns.resolve('google.ru', 'NS', function (err, domains) {
    if(err)throw err;
    console.log('google.ru have dns servers: ');
    domains.forEach(function (domain) {
        console.log(domain);
    })
});


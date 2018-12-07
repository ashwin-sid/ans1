//pacfile for 212.161.42.100 from 25444_4504:1_2387
// Cust: Clifford Chance LLP**
// Pol:  DEFAULT 25444 4504
// Ntw:  hyNetwork 2512833
var atyps = new Array("authservice.", "formauth.");
function FindProxyForURL(url, host)
{
   var proxy_addresses;
   var hosted;

   /* Convert the host parameter to lowercase
      to facilitate case insensitive matching.
   */
   host = host.toLowerCase();


   proxy_addresses = 'PROXY hybrid-web.global.blackspider.com:80';
    if ('Network_2512833' == 'Network_2512815')
    {
        if (url.substring(0, 5) == 'http:')
        {
             proxy_addresses = 'PROXY wsgarray.shn.asia.cliffordchance.com:80; PROXY wsgarray.hkg.asia.cliffordchance.com:80';
        }
        if (url.substring(0, 6) == 'https:')
        {
             proxy_addresses = 'PROXY wsgarray.shn.asia.cliffordchance.com:443; PROXY wsgarray.hkg.asia.cliffordchance.com:443';
        }
        if (url.substring(0, 4) == 'ftp:')
        {
             proxy_addresses = 'PROXY wsgarray.shn.asia.cliffordchance.com:21; PROXY wsgarray.hkg.asia.cliffordchance.com:21';
        }
    }
    if ('Network_2512833' == 'Network_2512816')
    {
        if (url.substring(0, 5) == 'http:')
        {
             proxy_addresses = 'PROXY wsgarray.sin.asia.cliffordchance.com:80; PROXY wsgarray.hkg.asia.cliffordchance.com:80';
        }
        if (url.substring(0, 6) == 'https:')
        {
             proxy_addresses = 'PROXY wsgarray.sin.asia.cliffordchance.com:443; PROXY wsgarray.hkg.asia.cliffordchance.com:443';
        }
        if (url.substring(0, 4) == 'ftp:')
        {
             proxy_addresses = 'PROXY wsgarray.sin.asia.cliffordchance.com:21; PROXY wsgarray.hkg.asia.cliffordchance.com:21';
        }
    }
    if ('Network_2512833' == 'Network_2512817')
    {
        if (url.substring(0, 5) == 'http:')
        {
             proxy_addresses = 'PROXY wsgarray.lux.eu.cliffordchance.com:80; PROXY wsgarray.esc.eu.cliffordchance.com:80';
        }
        if (url.substring(0, 6) == 'https:')
        {
             proxy_addresses = 'PROXY wsgarray.lux.eu.cliffordchance.com:443; PROXY wsgarray.esc.eu.cliffordchance.com:443';
        }
        if (url.substring(0, 4) == 'ftp:')
        {
             proxy_addresses = 'PROXY wsgarray.lux.eu.cliffordchance.com:21; PROXY wsgarray.esc.eu.cliffordchance.com:21';
        }
    }
    if ('Network_2512833' == 'Network_2512818')
    {
        if (url.substring(0, 5) == 'http:')
        {
             proxy_addresses = 'PROXY wsgarray.aud.uk.cliffordchance.com:80; PROXY wsgarray.dub.uk.cliffordchance.com:80; PROXY wsgarray.ctl.uk.cliffordchance.com:80';
        }
        if (url.substring(0, 6) == 'https:')
        {
             proxy_addresses = 'PROXY wsgarray.aud.uk.cliffordchance.com:443; PROXY wsgarray.dub.uk.cliffordchance.com:443; PROXY wsgarray.ctl.uk.cliffordchance.com:443';
        }
        if (url.substring(0, 4) == 'ftp:')
        {
             proxy_addresses = 'PROXY wsgarray.aud.uk.cliffordchance.com:21; PROXY wsgarray.dub.uk.cliffordchance.com:21; PROXY wsgarray.ctl.uk.cliffordchance.com:21';
        }
    }
    if ('Network_2512833' == 'Network_2512819')
    {
        if (url.substring(0, 5) == 'http:')
        {
             proxy_addresses = 'PROXY wsgarray.tok.asia.cliffordchance.com:80; PROXY wsgarray.hkg.asia.cliffordchance.com:80';
        }
        if (url.substring(0, 6) == 'https:')
        {
             proxy_addresses = 'PROXY wsgarray.tok.asia.cliffordchance.com:443; PROXY wsgarray.hkg.asia.cliffordchance.com:443';
        }
        if (url.substring(0, 4) == 'ftp:')
        {
             proxy_addresses = 'PROXY wsgarray.tok.asia.cliffordchance.com:21; PROXY wsgarray.hkg.asia.cliffordchance.com:21';
        }
    }
    if ('Network_2512833' == 'Network_2512820')
    {
        if (url.substring(0, 5) == 'http:')
        {
             proxy_addresses = 'PROXY wsgarray.bru.eu.cliffordchance.com:80; PROXY wsgarray.par.eu.cliffordchance.com:80; PROXY wsgarray.esc.eu.cliffordchance.com:80';
        }
        if (url.substring(0, 6) == 'https:')
        {
             proxy_addresses = 'PROXY wsgarray.bru.eu.cliffordchance.com:443; PROXY wsgarray.par.eu.cliffordchance.com:443; PROXY wsgarray.esc.eu.cliffordchance.com:443';
        }
        if (url.substring(0, 4) == 'ftp:')
        {
             proxy_addresses = 'PROXY wsgarray.bru.eu.cliffordchance.com:21; PROXY wsgarray.par.eu.cliffordchance.com:21; PROXY wsgarray.esc.eu.cliffordchance.com:21';
        }
    }
    if ('Network_2512833' == 'Network_2512821')
    {
        if (url.substring(0, 5) == 'http:')
        {
             proxy_addresses = 'PROXY wsgarray.aud.uk.cliffordchance.com:80; PROXY wsgarray.dub.uk.cliffordchance.com:80; PROXY wsgarray.ctl.uk.cliffordchance.com:80';
        }
        if (url.substring(0, 6) == 'https:')
        {
             proxy_addresses = 'PROXY wsgarray.aud.uk.cliffordchance.com:443; PROXY wsgarray.dub.uk.cliffordchance.com:443; PROXY wsgarray.ctl.uk.cliffordchance.com:443';
        }
        if (url.substring(0, 4) == 'ftp:')
        {
             proxy_addresses = 'PROXY wsgarray.aud.uk.cliffordchance.com:21; PROXY wsgarray.dub.uk.cliffordchance.com:21; PROXY wsgarray.ctl.uk.cliffordchance.com:21';
        }
    }
    if ('Network_2512833' == 'Network_2512822')
    {
        if (url.substring(0, 5) == 'http:')
        {
             proxy_addresses = 'PROXY wsgarray.cas.eu.cliffordchance.com:80; PROXY wsgarray.esc.eu.cliffordchance.com:80; PROXY wsgarray.ctl.uk.cliffordchance.com:80';
        }
        if (url.substring(0, 6) == 'https:')
        {
             proxy_addresses = 'PROXY wsgarray.cas.eu.cliffordchance.com:443; PROXY wsgarray.esc.eu.cliffordchance.com:443; PROXY wsgarray.ctl.uk.cliffordchance.com:443';
        }
        if (url.substring(0, 4) == 'ftp:')
        {
             proxy_addresses = 'PROXY wsgarray.cas.eu.cliffordchance.com:21; PROXY wsgarray.esc.eu.cliffordchance.com:21; PROXY wsgarray.ctl.uk.cliffordchance.com:21';
        }
    }
    if ('Network_2512833' == 'Network_2512823')
    {
        if (url.substring(0, 5) == 'http:')
        {
             proxy_addresses = 'PROXY wsgarray.buc.eu.cliffordchance.com:80; PROXY wsgarray.esc.eu.cliffordchance.com:80; PROXY wsgarray.ctl.uk.cliffordchance.com:80';
        }
        if (url.substring(0, 6) == 'https:')
        {
             proxy_addresses = 'PROXY wsgarray.buc.eu.cliffordchance.com:443; PROXY wsgarray.esc.eu.cliffordchance.com:443; PROXY wsgarray.ctl.uk.cliffordchance.com:443';
        }
        if (url.substring(0, 4) == 'ftp:')
        {
             proxy_addresses = 'PROXY wsgarray.buc.eu.cliffordchance.com:21; PROXY wsgarray.esc.eu.cliffordchance.com:21; PROXY wsgarray.ctl.uk.cliffordchance.com:21';
        }
    }
    if ('Network_2512833' == 'Network_2512824')
    {
        if (url.substring(0, 5) == 'http:')
        {
             proxy_addresses = 'PROXY wsgarray.mos.eu.cliffordchance.com:80; PROXY wsgarray.esc.eu.cliffordchance.com:80';
        }
        if (url.substring(0, 6) == 'https:')
        {
             proxy_addresses = 'PROXY wsgarray.mos.eu.cliffordchance.com:443; PROXY wsgarray.esc.eu.cliffordchance.com:443';
        }
        if (url.substring(0, 4) == 'ftp:')
        {
             proxy_addresses = 'PROXY wsgarray.mos.eu.cliffordchance.com:21; PROXY wsgarray.esc.eu.cliffordchance.com:21';
        }
    }
    if ('Network_2512833' == 'Network_2512825')
    {
        if (url.substring(0, 5) == 'http:')
        {
             proxy_addresses = 'PROXY wsgarray.pra.eu.cliffordchance.com:80; PROXY wsgarray.esc.eu.cliffordchance.com:80; PROXY wsgarray.ctl.uk.cliffordchance.com:80';
        }
        if (url.substring(0, 6) == 'https:')
        {
             proxy_addresses = 'PROXY wsgarray.pra.eu.cliffordchance.com:443; PROXY wsgarray.esc.eu.cliffordchance.com:443; PROXY wsgarray.ctl.uk.cliffordchance.com:443';
        }
        if (url.substring(0, 4) == 'ftp:')
        {
             proxy_addresses = 'PROXY wsgarray.pra.eu.cliffordchance.com:21; PROXY wsgarray.esc.eu.cliffordchance.com:21; PROXY wsgarray.ctl.uk.cliffordchance.com:21';
        }
    }
    if ('Network_2512833' == 'Network_2512826')
    {
        if (url.substring(0, 5) == 'http:')
        {
             proxy_addresses = 'PROXY wsgarray.war.eu.cliffordchance.com:80; PROXY wsgarray.esc.eu.cliffordchance.com:80; PROXY wsgarray.ctl.uk.cliffordchance.com:80';
        }
        if (url.substring(0, 6) == 'https:')
        {
             proxy_addresses = 'PROXY wsgarray.war.eu.cliffordchance.com:443; PROXY wsgarray.esc.eu.cliffordchance.com:443; PROXY wsgarray.ctl.uk.cliffordchance.com:443';
        }
        if (url.substring(0, 4) == 'ftp:')
        {
             proxy_addresses = 'PROXY wsgarray.war.eu.cliffordchance.com:21; PROXY wsgarray.esc.eu.cliffordchance.com:21; PROXY wsgarray.ctl.uk.cliffordchance.com:21';
        }
    }
    if ('Network_2512833' == 'Network_2512827')
    {
        if (url.substring(0, 5) == 'http:')
        {
             proxy_addresses = 'PROXY wsgarray.esc.eu.cliffordchance.com:80; PROXY wsgarray.ctl.uk.cliffordchance.com:80';
        }
        if (url.substring(0, 6) == 'https:')
        {
             proxy_addresses = 'PROXY wsgarray.esc.eu.cliffordchance.com:443; PROXY wsgarray.ctl.uk.cliffordchance.com:443';
        }
        if (url.substring(0, 4) == 'ftp:')
        {
             proxy_addresses = 'PROXY wsgarray.esc.eu.cliffordchance.com:21; PROXY wsgarray.ctl.uk.cliffordchance.com:21';
        }
    }
    if ('Network_2512833' == 'Network_2512828')
    {
        if (url.substring(0, 5) == 'http:')
        {
             proxy_addresses = 'PROXY wsgarray.del.uk.cliffordchance.com:80; PROXY wsgarray.ctl.uk.cliffordchance.com:80';
        }
        if (url.substring(0, 6) == 'https:')
        {
             proxy_addresses = 'PROXY wsgarray.del.uk.cliffordchance.com:443; PROXY wsgarray.ctl.uk.cliffordchance.com:443';
        }
        if (url.substring(0, 4) == 'ftp:')
        {
             proxy_addresses = 'PROXY wsgarray.del.uk.cliffordchance.com:21; PROXY wsgarray.ctl.uk.cliffordchance.com:21';
        }
    }
    if ('Network_2512833' == 'Network_2512829')
    {
        if (url.substring(0, 5) == 'http:')
        {
             proxy_addresses = 'PROXY wsgarray.rom.eu.cliffordchance.com:80; PROXY wsgarray.mil.eu.cliffordchance.com:80; PROXY wsgarray.esc.eu.cliffordchance.com:80';
        }
        if (url.substring(0, 6) == 'https:')
        {
             proxy_addresses = 'PROXY wsgarray.rom.eu.cliffordchance.com:443; PROXY wsgarray.mil.eu.cliffordchance.com:443; PROXY wsgarray.esc.eu.cliffordchance.com:443';
        }
        if (url.substring(0, 4) == 'ftp:')
        {
             proxy_addresses = 'PROXY wsgarray.rom.eu.cliffordchance.com:21; PROXY wsgarray.mil.eu.cliffordchance.com:21; PROXY wsgarray.esc.eu.cliffordchance.com:21';
        }
    }
    if ('Network_2512833' == 'Network_2512830')
    {
        if (url.substring(0, 5) == 'http:')
        {
             proxy_addresses = 'PROXY wsgarray.par.eu.cliffordchance.com:80; PROXY wsgarray.esc.eu.cliffordchance.com:80; PROXY wsgarray.ctl.uk.cliffordchance.com:80';
        }
        if (url.substring(0, 6) == 'https:')
        {
             proxy_addresses = 'PROXY wsgarray.par.eu.cliffordchance.com:443; PROXY wsgarray.esc.eu.cliffordchance.com:443; PROXY wsgarray.ctl.uk.cliffordchance.com:443';
        }
        if (url.substring(0, 4) == 'ftp:')
        {
             proxy_addresses = 'PROXY wsgarray.par.eu.cliffordchance.com:21; PROXY wsgarray.esc.eu.cliffordchance.com:21; PROXY wsgarray.ctl.uk.cliffordchance.com:21';
        }
    }
    if ('Network_2512833' == 'Network_2512831')
    {
        if (url.substring(0, 5) == 'http:')
        {
             proxy_addresses = 'PROXY wsgarray.bei.asia.cliffordchance.com:80; PROXY wsgarray.hkg.asia.cliffordchance.com:80';
        }
        if (url.substring(0, 6) == 'https:')
        {
             proxy_addresses = 'PROXY wsgarray.bei.asia.cliffordchance.com:443; PROXY wsgarray.hkg.asia.cliffordchance.com:443';
        }
        if (url.substring(0, 4) == 'ftp:')
        {
             proxy_addresses = 'PROXY wsgarray.bei.asia.cliffordchance.com:21; PROXY wsgarray.hkg.asia.cliffordchance.com:21';
        }
    }
    if ('Network_2512833' == 'Network_2512832')
    {
        if (url.substring(0, 5) == 'http:')
        {
             proxy_addresses = 'PROXY wsgarray.ams.eu.cliffordchance.com:80; PROXY wsgarray.esc.eu.cliffordchance.com:80; PROXY wsgarray.ctl.uk.cliffordchance.com:80';
        }
        if (url.substring(0, 6) == 'https:')
        {
             proxy_addresses = 'PROXY wsgarray.ams.eu.cliffordchance.com:443; PROXY wsgarray.esc.eu.cliffordchance.com:443; PROXY wsgarray.ctl.uk.cliffordchance.com:443';
        }
        if (url.substring(0, 4) == 'ftp:')
        {
             proxy_addresses = 'PROXY wsgarray.ams.eu.cliffordchance.com:21; PROXY wsgarray.esc.eu.cliffordchance.com:21; PROXY wsgarray.ctl.uk.cliffordchance.com:21';
        }
    }
    if ('Network_2512833' == 'Network_2512833')
    {
        if (url.substring(0, 5) == 'http:')
        {
             proxy_addresses = 'PROXY wsgarray.chp.uk.cliffordchance.com:80; PROXY wsgarray.lon.uk.cliffordchance.com:80; PROXY wsgarray.ctl.uk.cliffordchance.com:80';
        }
        if (url.substring(0, 6) == 'https:')
        {
             proxy_addresses = 'PROXY wsgarray.chp.uk.cliffordchance.com:443; PROXY wsgarray.lon.uk.cliffordchance.com:443; PROXY wsgarray.ctl.uk.cliffordchance.com:443';
        }
        if (url.substring(0, 4) == 'ftp:')
        {
             proxy_addresses = 'PROXY wsgarray.chp.uk.cliffordchance.com:21; PROXY wsgarray.lon.uk.cliffordchance.com:21; PROXY wsgarray.ctl.uk.cliffordchance.com:21';
        }
    }
    if ('Network_2512833' == 'Network_2512834')
    {
        if (url.substring(0, 5) == 'http:')
        {
             proxy_addresses = 'PROXY wsgarray.syd.asia.cliffordchance.com:80; PROXY wsgarray.per.asia.cliffordchance.com:80';
        }
        if (url.substring(0, 6) == 'https:')
        {
             proxy_addresses = 'PROXY wsgarray.syd.asia.cliffordchance.com:443; PROXY wsgarray.per.asia.cliffordchance.com:443';
        }
        if (url.substring(0, 4) == 'ftp:')
        {
             proxy_addresses = 'PROXY wsgarray.syd.asia.cliffordchance.com:21; PROXY wsgarray.per.asia.cliffordchance.com:21';
        }
    }
    if ('Network_2512833' == 'Network_2512835')
    {
        if (url.substring(0, 5) == 'http:')
        {
             proxy_addresses = 'PROXY wsgarray.lon.uk.cliffordchance.com:80; PROXY wsgarray.chp.uk.cliffordchance.com:80; PROXY wsgarray.ctl.uk.cliffordchance.com:80';
        }
        if (url.substring(0, 6) == 'https:')
        {
             proxy_addresses = 'PROXY wsgarray.lon.uk.cliffordchance.com:443; PROXY wsgarray.chp.uk.cliffordchance.com:443; PROXY wsgarray.ctl.uk.cliffordchance.com:443';
        }
        if (url.substring(0, 4) == 'ftp:')
        {
             proxy_addresses = 'PROXY wsgarray.lon.uk.cliffordchance.com:21; PROXY wsgarray.chp.uk.cliffordchance.com:21; PROXY wsgarray.ctl.uk.cliffordchance.com:21';
        }
    }
    if ('Network_2512833' == 'Network_2512836')
    {
        if (url.substring(0, 5) == 'http:')
        {
             proxy_addresses = 'PROXY wsgarray.mad.eu.cliffordchance.com:80; PROXY wsgarray.bar.eu.cliffordchance.com:80; PROXY wsgarray.esc.eu.cliffordchance.com:80';
        }
        if (url.substring(0, 6) == 'https:')
        {
             proxy_addresses = 'PROXY wsgarray.mad.eu.cliffordchance.com:443; PROXY wsgarray.bar.eu.cliffordchance.com:443; PROXY wsgarray.esc.eu.cliffordchance.com:443';
        }
        if (url.substring(0, 4) == 'ftp:')
        {
             proxy_addresses = 'PROXY wsgarray.mad.eu.cliffordchance.com:21; PROXY wsgarray.bar.eu.cliffordchance.com:21; PROXY wsgarray.esc.eu.cliffordchance.com:21';
        }
    }
    if ('Network_2512833' == 'Network_2512837')
    {
        if (url.substring(0, 5) == 'http:')
        {
             proxy_addresses = 'PROXY wsgarray.per.asia.cliffordchance.com:80; PROXY wsgarray.hkg.asia.cliffordchance.com:80';
        }
        if (url.substring(0, 6) == 'https:')
        {
             proxy_addresses = 'PROXY wsgarray.per.asia.cliffordchance.com:443; PROXY wsgarray.hkg.asia.cliffordchance.com:443';
        }
        if (url.substring(0, 4) == 'ftp:')
        {
             proxy_addresses = 'PROXY wsgarray.per.asia.cliffordchance.com:21; PROXY wsgarray.hkg.asia.cliffordchance.com:21';
        }
    }
    if ('Network_2512833' == 'Network_2512838')
    {
        if (url.substring(0, 5) == 'http:')
        {
             proxy_addresses = 'PROXY wsgarray.sap.uk.cliffordchance.com:80; PROXY wsgarray.ny.americas.cliffordchance.com:80; PROXY wsgarray.dc.americas.cliffordchance.com:80';
        }
        if (url.substring(0, 6) == 'https:')
        {
             proxy_addresses = 'PROXY wsgarray.sap.uk.cliffordchance.com:443; PROXY wsgarray.ny.americas.cliffordchance.com:443; PROXY wsgarray.dc.americas.cliffordchance.com:443';
        }
        if (url.substring(0, 4) == 'ftp:')
        {
             proxy_addresses = 'PROXY wsgarray.sap.uk.cliffordchance.com:21; PROXY wsgarray.ny.americas.cliffordchance.com:21; PROXY wsgarray.dc.americas.cliffordchance.com:21';
        }
    }
    if ('Network_2512833' == 'Network_2512839')
    {
        if (url.substring(0, 5) == 'http:')
        {
             proxy_addresses = 'PROXY wsgarray.ist.eu.cliffordchance.com:80; PROXY wsgarray.esc.eu.cliffordchance.com:80';
        }
        if (url.substring(0, 6) == 'https:')
        {
             proxy_addresses = 'PROXY wsgarray.ist.eu.cliffordchance.com:443; PROXY wsgarray.esc.eu.cliffordchance.com:443';
        }
        if (url.substring(0, 4) == 'ftp:')
        {
             proxy_addresses = 'PROXY wsgarray.ist.eu.cliffordchance.com:21; PROXY wsgarray.esc.eu.cliffordchance.com:21';
        }
    }
    if ('Network_2512833' == 'Network_2512840')
    {
        if (url.substring(0, 5) == 'http:')
        {
             proxy_addresses = 'PROXY wsgarray.dus.eu.cliffordchance.com:80; PROXY wsgarray.esc.eu.cliffordchance.com:80; PROXY wsgarray.ctl.uk.cliffordchance.com:80';
        }
        if (url.substring(0, 6) == 'https:')
        {
             proxy_addresses = 'PROXY wsgarray.dus.eu.cliffordchance.com:443; PROXY wsgarray.esc.eu.cliffordchance.com:443; PROXY wsgarray.ctl.uk.cliffordchance.com:443';
        }
        if (url.substring(0, 4) == 'ftp:')
        {
             proxy_addresses = 'PROXY wsgarray.dus.eu.cliffordchance.com:21; PROXY wsgarray.esc.eu.cliffordchance.com:21; PROXY wsgarray.ctl.uk.cliffordchance.com:21';
        }
    }
    if ('Network_2512833' == 'Network_2512841')
    {
        if (url.substring(0, 5) == 'http:')
        {
             proxy_addresses = 'PROXY wsgarray.seo.asia.cliffordchance.com:80; PROXY wsgarray.hkg.asia.cliffordchance.com:80';
        }
        if (url.substring(0, 6) == 'https:')
        {
             proxy_addresses = 'PROXY wsgarray.seo.asia.cliffordchance.com:443; PROXY wsgarray.hkg.asia.cliffordchance.com:443';
        }
        if (url.substring(0, 4) == 'ftp:')
        {
             proxy_addresses = 'PROXY wsgarray.seo.asia.cliffordchance.com:21; PROXY wsgarray.hkg.asia.cliffordchance.com:21';
        }
    }
    if ('Network_2512833' == 'Network_2512842')
    {
        if (url.substring(0, 5) == 'http:')
        {
             proxy_addresses = 'PROXY wsgarray.dc.americas.cliffordchance.com:80; PROXY wsgarray.ny.americas.cliffordchance.com:80';
        }
        if (url.substring(0, 6) == 'https:')
        {
             proxy_addresses = 'PROXY wsgarray.dc.americas.cliffordchance.com:443; PROXY wsgarray.ny.americas.cliffordchance.com:443';
        }
        if (url.substring(0, 4) == 'ftp:')
        {
             proxy_addresses = 'PROXY wsgarray.dc.americas.cliffordchance.com:21; PROXY wsgarray.ny.americas.cliffordchance.com:21';
        }
    }
    if ('Network_2512833' == 'Network_2512843')
    {
        if (url.substring(0, 5) == 'http:')
        {
             proxy_addresses = 'PROXY wsgarray.muc.eu.cliffordchance.com:80; PROXY wsgarray.esc.eu.cliffordchance.com:80';
        }
        if (url.substring(0, 6) == 'https:')
        {
             proxy_addresses = 'PROXY wsgarray.muc.eu.cliffordchance.com:443; PROXY wsgarray.esc.eu.cliffordchance.com:443';
        }
        if (url.substring(0, 4) == 'ftp:')
        {
             proxy_addresses = 'PROXY wsgarray.muc.eu.cliffordchance.com:21; PROXY wsgarray.esc.eu.cliffordchance.com:21';
        }
    }
    if ('Network_2512833' == 'Network_2512844')
    {
        if (url.substring(0, 5) == 'http:')
        {
             proxy_addresses = 'PROXY wsgarray.bar.eu.cliffordchance.com:80; PROXY wsgarray.mad.eu.cliffordchance.com:80; PROXY wsgarray.esc.eu.cliffordchance.com:80';
        }
        if (url.substring(0, 6) == 'https:')
        {
             proxy_addresses = 'PROXY wsgarray.bar.eu.cliffordchance.com:443; PROXY wsgarray.mad.eu.cliffordchance.com:443; PROXY wsgarray.esc.eu.cliffordchance.com:443';
        }
        if (url.substring(0, 4) == 'ftp:')
        {
             proxy_addresses = 'PROXY wsgarray.bar.eu.cliffordchance.com:21; PROXY wsgarray.mad.eu.cliffordchance.com:21; PROXY wsgarray.esc.eu.cliffordchance.com:21';
        }
    }
    if ('Network_2512833' == 'Network_2512845')
    {
        if (url.substring(0, 5) == 'http:')
        {
             proxy_addresses = 'PROXY wsgarray.ny.americas.cliffordchance.com:80; PROXY wsgarray.dc.americas.cliffordchance.com:80';
        }
        if (url.substring(0, 6) == 'https:')
        {
             proxy_addresses = 'PROXY wsgarray.ny.americas.cliffordchance.com:443; PROXY wsgarray.dc.americas.cliffordchance.com:443';
        }
        if (url.substring(0, 4) == 'ftp:')
        {
             proxy_addresses = 'PROXY wsgarray.ny.americas.cliffordchance.com:21; PROXY wsgarray.dc.americas.cliffordchance.com:21';
        }
    }
    if ('Network_2512833' == 'Network_2512846')
    {
        if (url.substring(0, 5) == 'http:')
        {
             proxy_addresses = 'PROXY wsgarray.mil.eu.cliffordchance.com:80; PROXY wsgarray.esc.eu.cliffordchance.com:80';
        }
        if (url.substring(0, 6) == 'https:')
        {
             proxy_addresses = 'PROXY wsgarray.mil.eu.cliffordchance.com:443; PROXY wsgarray.esc.eu.cliffordchance.com:443';
        }
        if (url.substring(0, 4) == 'ftp:')
        {
             proxy_addresses = 'PROXY wsgarray.mil.eu.cliffordchance.com:21; PROXY wsgarray.esc.eu.cliffordchance.com:21';
        }
    }

   hosted = (proxy_addresses == 'PROXY hybrid-web.global.blackspider.com:80');

   /* Don't proxy local hostnames */
   if (isPlainHostName(host))
   {
       return 'DIRECT';
   }

   /* always proxy on normal service address/port for the login host */
   if (shExpMatch(host, '*proxy-login.blackspider.com'))
   {
       // Examine and possibly replace the first proxy setting generated above.
       prx_sect = proxy_addresses.split(';')[0];    // get 1st setting
       if (!shExpMatch(prx_sect, 'PROXY *')) return proxy_addresses; // Not a proxy specifier, so don't change anything
       // Verify that the proxy specifier is in the hosted domain by checking last 2 hostname components
       std_host = 'hybrid-web.global.blackspider.com';
       idx = std_host.search('\.[^.]+\.[^.]+$');
       if (idx < 0) return proxy_addresses; // Not enough hostname components to check whether it is in hosted domain, so we should not change it
       std_domain = std_host.substring(idx);
       len_std_domain = std_domain.length;
       prx_spec = prx_sect.split(' ',2)[1];  // discard 'PROXY ' part keeping host:port
       prx = prx_spec.split(':')[0];     // split hostname from port
       if (prx.substring(prx.length - len_std_domain) != std_domain) return proxy_addresses;    // Not in hosted domain, so we should not change it
       for (i in atyps)
       {
           // strip away auth-type prefix, if present, from hostname in order to use standard service
           atyp = atyps[i];
           if (prx.substring(0, atyp.length) == atyp) return 'PROXY ' + prx_spec.substring(atyp.length);
       }
       // Not an auth-type hostname, so change port number to access the standard service
       return 'PROXY ' + prx + ':80';
   }

   /* Don't proxy local domains */
   var domain_list;
   if ( hosted )
   {
       // Unfiltered destinations of type hybrid and both hybrid and explicit.
       domain_list = new Array("intranet.cliffordchance.com",
"cliffordchance.net",
"cliffordchanceconnect.com");
   }
   else
   {
       // Unfiltered destinations of type explicit and both hybrid and explicit.
       domain_list = new Array("intranet.cliffordchance.com",
"cliffordchance.net",
"cliffordchanceconnect.com");
   }
   for (d in domain_list)
   {
       if ( dnsDomainIs(host, "." + domain_list[d] ) || host == domain_list[d] )
       {
           return 'DIRECT';
       }
   }

   /* Don't proxy portal addresses */
   if ((host == 'www.mailcontrol.com') ||
dnsDomainIs(host, '.mailcontrol.com') ||
(host == 'home.hybrid.global.blackspider.com') ||
(host == 'webdefence.global.blackspider.com') ||
(host == 'hybrid-web.global.blackspider.com') ||
(host == 'download.global.blackspider.com') ||
(host == 'pac.webdefence.global.blackspider.com') ||
(host == 'pac.hybrid-web.global.blackspider.com') ||
(host == 'img.hybrid-web.websense.net') ||
(host == 'mobile.websense.net') ||
(host == 'mdm.websense.net') ||
(host == 'admin.websense.net') ||
(host == 'status.websense.net') ||
dnsDomainIs(host, '.forcepoint.net') ||
(host == 'epevents.blackspider.com'))
   {
       return 'DIRECT';
   }

   /* Don't proxy Windows Update */
   if ((host == "download.microsoft.com") ||
(host == "ntservicepack.microsoft.com") ||
(host == "cdm.microsoft.com") ||
(host == "officecdn.microsoft.com.edgesuite.net") ||
(host == "wustat.windows.com") ||
(host == "windowsupdate.microsoft.com") ||
(dnsDomainIs(host, ".windowsupdate.microsoft.com")) ||
(host == "update.microsoft.com") ||
(dnsDomainIs(host, ".update.microsoft.com")) ||
(dnsDomainIs(host, ".windowsupdate.com")) ||
(host == "officecdn.microsoft.com") ||
(host == "sci2-1.am.microsoft.com") ||
(dnsDomainIs(host, ".dl.ws.microsoft.com")) ||
(dnsDomainIs(host, ".delivery.mp.microsoft.com")))
   {
       return 'DIRECT';
   }

    /* Don't proxy Office 365 */
    var domain_pattern_list = new Array();
    for (d in domain_pattern_list)
    {
        if (shExpMatch(host, domain_pattern_list[d]))
        {
            return 'DIRECT';
        }
    }

   /* Don't proxy redirects to SSO gateway */
   if (false)
   {
       return 'DIRECT';
   }

   /* Handle SSO redirector requests for roaming users */
   if (false)
   {
       return 'DIRECT';
   }

   /* Query page should always resolve to the proxy - even if it's treated as a local address */
   if (isResolvable(host) && !(shExpMatch(url, 'http://query.webdefence.global.blackspider.com/*')))
   {
       var hostIP = dnsResolve(host);

       /* Don't proxy non-routable addresses (RFC 3330) */
       if (isInNet(hostIP, '0.0.0.0', '255.0.0.0') ||
isInNet(hostIP, '10.0.0.0', '255.0.0.0') ||
isInNet(hostIP, '127.0.0.0', '255.0.0.0') ||
isInNet(hostIP, '169.254.0.0', '255.255.0.0') ||
isInNet(hostIP, '172.16.0.0', '255.240.0.0') ||
isInNet(hostIP, '192.0.2.0', '255.255.255.0') ||
isInNet(hostIP, '192.88.99.0', '255.255.255.0') ||
isInNet(hostIP, '192.168.0.0', '255.255.0.0') ||
isInNet(hostIP, '198.18.0.0', '255.254.0.0') ||
isInNet(hostIP, '224.0.0.0', '240.0.0.0') ||
isInNet(hostIP, '240.0.0.0', '240.0.0.0') ||
isInNet(hostIP, '100.64.0.0', '255.192.0.0'))
       {
           return 'DIRECT';
       }

       /* Don't proxy local addresses */
       if (false)
       {
           return 'DIRECT';
       }
   }

   
   if (hosted)
   {
       if (url.substring(0, 6) == 'https:' || url.substring(0, 4) == 'wss:')
       {
           var pats = new Array("");
           for (i in pats)
           {
               if (shExpMatch(host, pats[i].toLowerCase()))
               {
                   // non-SSL-terminate hosts must use the normal address/port
                   return 'PROXY hybrid-web.global.blackspider.com:80';
               }
           }
       }
       if (url.substring(0, 5) == 'http:' || url.substring(0, 6) == 'https:' || url.substring(0, 3) == 'ws:' || url.substring(0, 4) == 'wss:')
       {
           return 'PROXY hybrid-web.global.blackspider.com:80';
       }
       if (url.substring(0, 4) == 'ftp:')
       {
           // ftp must use the normal address/port
           return 'PROXY hybrid-web.global.blackspider.com:80';
       }
   }
   else
   {
       if (url.substring(0, 5) == 'http:' || url.substring(0, 6) == 'https:' || url.substring(0, 4) == 'ftp:')
       {
           return proxy_addresses;
       }
   }
   return 'DIRECT';
}

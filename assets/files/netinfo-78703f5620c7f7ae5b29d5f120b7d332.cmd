@echo off
netsh wlan show interface > netinfo.log
netsh interface ipv4 show route >> netinfo.log
netsh interface ipv4 show addresses >> netinfo.log
netsh interface ipv6 show route >> netinfo.log
netsh interface ipv6 show neig >> netinfo.log
netsh interface ipv6 show addresses >> netinfo.log
netsh interface ipv6 show dnsservers >> netinfo.log
arp -a >> netinfo.log
nslookup www.vg.no >> netinfo.log
nslookup dns-resolver1.uninett.no >> netinfo.log
ping -4 8.8.8.8 >> netinfo.log
ping -4 158.38.0.1 >> netinfo.log
ping -6 2001:700:0:ff00::1 >> netinfo.log
ping -6 2001:4860:4860::8888 >> netinfo.log

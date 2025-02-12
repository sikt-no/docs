# DNS-brannmur

Mange phishing-kampanjer og enkelte typer malware kan enkelt blokkeres ved å hindre oppslag til domenet de peker til. DNS-brannmuren til eduCSC bruker såkalt RPZ til å gjøre dette, og bruker den samme oppdaterte dataen som ligger til grunn forMS Defender-integrasjonen vår.

## Hvordan tjenesten fungerer

Ved blokkering sender vi brukeren videre til et synkehull, hvor vi logger forespørselen og ev. annen relevant informasjon for statistikk- og driftsformål. Brukeren får også opp en nettside som forklarer at forespørselen ble blokkert og en enkel forklaring av hva tjenesten DNS-brannmur er.

Tjenesten baserer seg på navnetjenerne som Sikt allerede driver. Disse er stabile og geografisk distribuert for å sikre en mest mulig pålitelig tjeneste.

## Kom i gang

Før du setter i gang må du melde inn hvilke nett som skal beskyttes. Klienter utenfor dette nettet vil ikke få DNS-brannmur. Send detaljene til sak@sikt.no og vi bekrefter når vi har gjort nødvendige oppdateringer på kanten vår.

Først og fremst må du konfigurere klienter til å bruke navnetjenerne til Sikt:

- IPv4: 158.38.0.1, 158.38.0.2
- IPv6: 2001:700:0:ff00::1, 2001:700:0:ff00::2

Hvordan dette gjøres er avhengig av lokal infrastruktur. Det typiske er å gjøre det gjennom DHCP (IPv4) eller RA DNS options (ev DHCPv6, IPv6).

De med split-brain eller eksisterende navnetjenere for oppslag, for eksempel Active Directory, kan vurdere å sette opp DNS-forwarding:

- AD: [Configure forwarders](https://learn.microsoft.com/en-us/windows-server/networking/dns/quickstart-install-configure-dns-server?tabs=powershell#configure-forwarders)
- [Forwarding in bind9](https://bind9.readthedocs.io/en/latest/reference.html#forwarding)
- [Forwarding i unbound](https://unbound.docs.nlnetlabs.nl/en/latest/manpages/unbound.conf.html#forward-zone-options)

Merk at forwarding eller NAT vil gjøre ev. statistikk om antallet brukere mindre nyttig. Det samme gjelder for brukere bak NAT eller lignende mekanismer.

For å bekrefte at tjenesten fungerer, bruk dig, nslookup eller liknende for å slå opp testdomenet vårt. Domenet skal svare med en `CNAME` (alias) mot domenet `blocked[.]cert.uninett.no`:

```console
$ dig +short filtertest.dnsbrannmur.no
blocked.cert.uninett.no.
158.38.2.54
```

# Green Light Pay Initiative

## Find your way in

| If you are… | Start here | Try this |
| --- | --- | --- |
| A cashier or operator | [Explore the microsite](public/index.html) | Identify one unclear moment in the fictional checkout. |
| A researcher | [Review the demo controls](public/demo.js) | Compare how the different receipt views are presented. |
| A developer | [Open the repository tree](docs/DIRECTORY.md) | Find the public microsite source and context. |

[Complete repository directory tree](docs/DIRECTORY.md)

## What would a cashier say the demo missed?

A checkout can look convincing from three feet away while asking the wrong person to make the next decision. Green Light Pay Initiative uses a shared fictional receipt so a cashier, a customer and an operator can describe the same moment in their own words.

Step through the [demo controls](public/demo.js) and the [research microsite source](public/index.html). The receipt views give the interviewer a concrete screen to discuss. The dated overview is research context; it does not establish current provider approval or a live payment service.

Name one moment in the fictional checkout and the role that would need clearer information. No customer records or payment details are needed. Green Light Pay keeps its own finances, contracts and governance; a research response is not an endorsement.

**Public microsite source.** Recruit operators who can identify concrete friction at the counter.

### Setup and usage

Use Node.js 24 for the included checks. Use Python 3 for the local static preview.

```sh
python3 -m http.server 8000 --bind 127.0.0.1 --directory public
```

Volunteer for a merchant interview. Open http://127.0.0.1:8000/ in a browser. 

### Developer entry points

A static public initiative site explains the research and simulates checkout. It depends on a separate approved provider for any production payment or funding route. Explore `public/`, `research/` in the full tree.

### Verification

The public entry page returned HTTP 200 and rendered local content in Chromium at a 390 × 844 viewport.

```sh
node --check public/demo.js
```

### Release scope

No provider clearance or funded deployment is inferred. Historical policy copy requires a fresh review before a new campaign. potify-greenlight-pay at `2477a636f27cc022aef0d407b30bca785dda51a6`. Public initiative microsite and a dated August research overview from the project backup.

[Technical whitepaper](docs/WHITEPAPER.md) · [Marketing and sales plan](docs/MARKETING.md) · [Dated developer log](docs/BUILD-LOG.md)

Existing asset and code terms remain applicable. Public access to a recording, illustration, brand or manuscript does not itself grant commercial reuse rights.

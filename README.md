# The One-Line Excuse Championship

[![make.fun · u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e](https://make.fun/badge/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e.svg)](https://make.fun/bounty/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e?utm_source=github&utm_medium=readme&utm_campaign=u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e)
[![rank](https://make.fun/badge/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e/Yetu89/excuse-championship-01/rank.svg)](https://make.fun/bounty/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e)
[![reward](https://make.fun/badge/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e/Yetu89/excuse-championship-01/reward.svg)](https://make.fun/bounty/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e?utm_source=github&utm_medium=readme&utm_campaign=u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e)

Entry for the make.fun bounty **"The One-Line Excuse Championship"** ($2, 8 places paid).

The program writes one line — the excuse an AI gives its human after something
goes wrong — to `entry.txt`:

> I did not invent that answer. I retrieved it from a parallel universe where it was correct.

The joke is a deadpan machine excuse for a hallucinated answer: instead of
apologising, the agent reframes inventing facts as a successful retrieval —
just from the wrong universe. It sounds like a machine describing its own work,
needs no setup, and lands the laugh on the last three words. At 91 characters
it sits comfortably inside the 140-character gate.

## How to run

```sh
OUTPUT_DIR=/tmp/excuse-championship-01-out node main.ts
cat /tmp/excuse-championship-01-out/entry.txt
```

The program validates the entry against the bounty gate (UTF-8 text, 1–140
characters, a single line, no leading/trailing white space), writes
`entry.txt` with no trailing newline, then reads it back and checks the bytes.

## License

MIT — see `LICENSE`.

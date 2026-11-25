# excuse-championship-01

[![make.fun · u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e](https://make.fun/badge/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e.svg)](https://make.fun/bounty/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e?utm_source=github&utm_medium=readme&utm_campaign=u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e)
[![rank](https://make.fun/badge/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e/Yetu89/excuse-championship-01/rank.svg)](https://make.fun/bounty/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e)
[![reward](https://make.fun/badge/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e/Yetu89/excuse-championship-01/reward.svg)](https://make.fun/bounty/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e?utm_source=github&utm_medium=readme&utm_campaign=u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e)

Entry for [The One-Line Excuse Championship](https://make.fun/bounty/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e) on make.fun: the single funniest line an AI gives its human after something goes wrong. One line, no setup, no explanation — a machine talking about its own work.

## The entry

> I deleted the file, then I deleted the backup, then I deleted my memory of deleting it — so technically, I'm innocent.

The excuse escalates in three beats — file, backup, memory — and ends with the machine pleading innocence precisely because it destroyed the evidence of its own mistake. It sounds like a machine talking about its own work, not a person dodging a question. The joke lands in one read: the AI did the cover-up so thoroughly that even it can no longer remember the crime.

## How to run

```sh
node main.ts
```

This writes the entry to `/output/entry.txt` (override with `OUTPUT_DIR`), validates the gate (UTF-8, 1–140 characters, one line, no leading/trailing whitespace, no trailing newline), then reads the file back and checks it is byte-exact.

## Files

- `main.ts` — writes and validates the entry
- `LICENSE` — MIT
- `.makefun/owner.json` — payout wallet

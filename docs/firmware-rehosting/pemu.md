# Technical Report: Protocol-Aware Firmware Rehosting for Effective Fuzzing of Embedded Network Stacks 

## summary:

PEMU automatically detect network protocols in firmware, and generate fuzzing data to go into deeper layers of logic. 

Evaluation criteria: code coverage, vulnerabilities discovery. 

## Insight for me 

Fuzzer can be used to mimic peripheral data to allow firmware execution without hardware peripherals. 

## Challenges 

- SOTA fuzzers can not progress past the initial layers of ENS, 
- Fuzzers have limited applicability to embedded firmware. 
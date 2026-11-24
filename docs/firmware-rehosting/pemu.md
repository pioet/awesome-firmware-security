# Technical Report: Protocol-Aware Firmware Rehosting for Effective Fuzzing of Embedded Network Stacks 

## summary:

PEMU automatically detect network protocols in firmware, and generate fuzzing data to go into deeper layers of logic. 

Evaluation criteria: code coverage, vulnerabilities discovery. 

## Insight for me 

Fuzzer can be used to mimic peripheral data to allow firmware execution without hardware peripherals. 

## Challenges (introduction)

- SOTA fuzzers can not progress past the initial layers of ENS, 
- Fuzzers have limited applicability to embedded firmware. 

## properties of ideal rehosting  

1. Do not need hardware setup and contfigurations. Do not need seeds to bootstrap fuzzing. 
2. Not only for common network layers, but also application layers. 

## Two techniques to monitor firmware's response to probing 

1. Parse low-level frames of firmware's output to detect available protocols. 
2. Evaluate the coverage with probing packets. 

## Challenges (Background)

Linux-based fuzzing uses readily available network interfaces to the target process. 

However, type 2 and type 3 embedded systems need inputs that satisfiy all underlying network layers. 

## Design 

SOTA only provides raw data to the network stack, without matching the syntax and semantics of network protocols. 

Pemu enables fuzzing at the application layer, bypassing lower-layer constraints like checksum and header validation. 

## High-level overview 

1. fuzzing as packet input. (generate, encapsulate, input)
2. firmware output as response. (output, extract, response) (protocol-specific probes and code coverage as feedback)

## Protocol-Aware fuzzing 

Protocol grammers can encapsulate valid packets with fuzzing content. 

Encapsulation module need to maintain states infromation. 

Taxnomaies: 
- unsolicited packets
- solicited packets

## Platform independency 

PEMU is agnostic to rehosting platform. 

Two functions are provided by PEMU:
- get_packet
- send_packet

## Network Traffic Analysis

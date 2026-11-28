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

1. Do not need hardware setup and configurations. Do not need seeds to bootstrap fuzzing. 
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

1. coverage based probing technique. 

- well-formed inputs can trigger unique reaction, compared to malformed input. 

measure reactions based on coverage: 

- naive: select the highest number of BBs. cons: error-handlin codes produce coverage. 
- new: uniquely covered basic blocks 

Challenges: network stack relys on other protocols 

design: iterative approach for detecting the entire stack. 

Figure 5 shows: from down to top, like a tree, to discover the protocols in different depth in the network stack. 

pros of this method:
- robustness:  unused protocol layer is an option, not forced choice. 

2. parsing-based analysis 

feat: iterative and self-correcting. 

- multiple options exist in a header, the most likely one is chosen. 

# implementation 

integration with 3 platforms: 
- fuzzware 
- hoedur 
- sumu 

## PEMU aspects 

**Encapsulation**

two interfaces: receive and send packets 

header fields definition. 

YAML configuration definition. 

**State Extraction**

Parse outupt pakcets according to specifications. 

## PEMU based analysis 

State extraction is not enough. 

Send specified packets and probe coverage. 

## integration with platforms

1. hook-based. Effort per HAL (per MCU family)
2. peripheral emulation. 

## Emulation 

- Multiple round experiments 
- Hardware configuration is acceptable 

Three policy: baseline (original), random, pemu. 

## Sample set 

A sample set of 9 applications (from SEMU and FUZZWARE). 

1. Ethernet and TCP/IP 
2. Bluetooth Low Energy (BLE)
3. IEEE 802.15.4 

EmNetTest's dataset: 12 CVEs across three ENSs 

## Results 

1. versatility and applicability of PEMU: platform independence 
2. coverage improved: SEMU ablatioin 

As figure 6 shows: 
- x axis is time, y axis is basic blocks coverage 
- coverage gose quickly in the beginning, then get the end 
- PEMU > RAND > BASE (>: outperforms)
- shadow means the fluctuation 
- PEMU can be integrated with distinct platforms 


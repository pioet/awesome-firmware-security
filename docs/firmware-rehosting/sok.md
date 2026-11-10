# Firmware rehosting overview

> Via a SoK (Systematization of Knowledge) paper: 
> 
> [SoK: Enabling Security Analyses of Embedded Systems via Rehosting](https://dl.acm.org/doi/10.1145/3433210.3453093)

## Definition of rehosting 

Move software stacks from heterogeneous physical systems into virtual environments on universal computing platform (e.g., x86 PC) that sufficiently model hardware behavior, in order to enable dynamic analyses of embedded systems. 

## Purpose of rehosting 

- Reverse engineering 
- Vulnerability discovery 
- Exploit development 
- Debugging 

> **Exploit development** involves creating and testing exploits to determine whether and how discovered vulnerabilities can be leveraged to compromise a system.

As the paper says, firmware rehosting has traditionally been a highly engineering-intensive and ad-hoc endeavor. 

The difference between emulation and rehosting: 

|   | Hardware Emulation | Firmware Rehosting |
|---|---|---|
| Primary target | Hardware platform | Firmware image |
| Objective | Reproduce hardware features accurately | Reproduce sufficient behavior for firmware analysis |
| Hardware coverage | Broad hardware functionality | Hardware dependencies relevant to target firmware |
| Fidelity goal | Hardware-oriented accuracy | Analysis-dependent sufficiency |
| Typical implementation | QEMU machine/device models | QEMU plus peripheral models, stubs, or other adaptations |

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

- The difference between emulation and rehosting: 

|   | Hardware Emulation | Firmware Rehosting |
|---|---|---|
| Primary target | Hardware platform | Firmware image |
| Objective | Reproduce hardware features accurately | Reproduce sufficient behavior for firmware analysis |
| Hardware coverage | Broad hardware functionality | Hardware dependencies relevant to target firmware |
| Fidelity goal | Hardware-oriented accuracy | Analysis-dependent sufficiency |
| Typical implementation | QEMU machine/device models | QEMU plus peripheral models, stubs, or other adaptations |

## Challenges of SOTA 

Unscientific and ad-hoc problem. 


## Definition in rehosting domain 

Used commonly: 

- Virtual Environment (VE) 
- Virtual Execution Engine (VXE)

Supplements: 

- Hardware Emulation System (HES)
- Rehosted Embedded System (RES)

## Formalizing Fidelity 

> Reference: Section 7.4 

### Keypoints

1. Fidelity evaluations and comparisons in prior work are **informal**. 
2. Rehosting techniques can not guarantee perfect fidelity. (The problem of measuring rehosting fidelity is an example of an unsolvable variation on the equivalence problem. Section 3.4. )
3. Thought, fidelity can be described by measuring the observable differences between RES and physical envirment. 

### Evaluation 

We can distinguish two approaches to evaluating the fidelity of a Rehosted Embedded System (RES): 

1. Over-approximated RES. 
2. Precisely reproducing RES. 

|  | Over-approximated RES | Precisely Reproducing RES |
|---|---|---|
| Goal | Capture all possible behaviors of the physical system, potentially including additional behaviors. | Reproduce the behavior of the physical system as accurately as possible. |
| Result | Low false negatives, but potentially high false positives. | Low true positives and low false positives. |
| Evaluation Criteria | Verify that every reachable state of the physical system is represented in the RES. | Evaluate input-output equivalence between the RES and the physical system under identical inputs. |



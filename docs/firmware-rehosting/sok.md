# SoK of rehosting 

> Via a SoK (Systematization of Knowledge) paper: 
> 
> [SoK: Enabling Security Analyses of Embedded Systems via Rehosting](https://dl.acm.org/doi/10.1145/3433210.3453093)

## Definition 

- Rehosting: 
Move software stacks from heterogeneous physical systems into virtual environments on universal computing platform (e.g., x86 PC) that sufficiently model hardware behavior, in order to enable dynamic analyses of embedded systems. 

- The difference between emulation and rehosting: 

|   | Hardware Emulation | Firmware Rehosting |
|---|---|---|
| Primary target | Hardware platform | Firmware image |
| Objective | Reproduce hardware features accurately | Reproduce sufficient behavior for firmware analysis |
| Hardware coverage | Broad hardware functionality | Hardware dependencies relevant to target firmware |
| Fidelity goal | Hardware-oriented accuracy | Analysis-dependent sufficiency |
| Typical implementation | QEMU machine/device models | QEMU plus peripheral models, stubs, or other adaptations |


- Virtual Environment (VE) 
- Virtual Execution Engine (VXE): A mechanism for interpreting instructions for a given ISA in a VE. 
- Hardware Emulation System (HES): A VE designed to recreate the features of hardware. 
- Rehosted Embedded System (RES)
- Rehosting: The process to building an RES for a given embedded system to enable a specfied analysis task. 

## Structure of paper

> Ref: End of section 1, and whole paper. 

1. Challenges in rehosting.
2. Prior work taxonomy. 
3. Roadmap to guide future work. 

## Purpose of rehosting 

> Ref: Abstract. 

- Reverse engineering 
- Vulnerability discovery 
- Exploit development 
- Debugging 

> **Exploit development** involves creating and testing exploits to determine whether and how discovered vulnerabilities can be leveraged to compromise a system.

## Challenges of SOTA research

Unscientific and ad-hoc problem. 

As the paper says, firmware rehosting has traditionally been a highly engineering-intensive and ad-hoc endeavor. 

While, researchers are beginning to address rehosting challenges systematically and in earnest. 


## Features (pros) of rehosting

- inspectable 
- mutable 
- replicable
- scalable
- disposable 

## Decoupling in rehosting 

- software stack
- physical hardware 
  
- Usersapce applications (function layer)
- OS layer 
- hardware layer 

To enable rehosting, some modifications are needed. However, they may casue mistakes about false vulnerabilities. 

## Listing 1 keypoints  

- Vulnerabilities / Execution results are dependent on hardare / VE. 

1. Example: NVRAM failures reuslt in NULL return value. 
2. Example: CPU which is Data-dependent in speed result in timing side-channel. 

## Taxonomies of embedded systems 

0. Type-0: Non-embedded system 
1. Type-1: general purpose OSs retrofitted for embedded systems 
2. Type-2: custom embedded OSs (RTOS)
3. Type-3: no OS abstractions

## Instruction set architecture (ISA)  

ARM, MIPS, PPC, AVR are usual. 

RES needs only to support the subset of the ISA. 

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



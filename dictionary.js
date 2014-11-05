/*

This file gives all the information for all known fieldtypes, equivalent to columns in NetflowV9
Source: http://www.cisco.com/en/US/technologies/tk648/tk362/technologies_white_paper09186a00800a3db9_ps6601_Products_White_Paper.html


Field Type
Value
Length (bytes)
Description*/

var fields = new Array()

//Common decode functions, used by several fields
var decoders = require('./field_decoder.js')

/*
IN_BYTES
1
N (default is 4)
Incoming counter with length N x 8 bits for number of bytes associated with an IP Flow.
*/
fields[1] = {
	length: 4,
	name: 'IN_BYTES'
}

/*
IN_PKTS
2
N (default is 4)
Incoming counter with length N x 8 bits for the number of packets associated with an IP Flow
*/
fields[2] = {
	length: 4,
	name: 'IN_PKTS'
}


/*
FLOWS
3
N
Number of flows that were aggregated; default for N is 4
*/
fields[3] = {
	length: 4,
	name: 'FLOWS'
}


/*
PROTOCOL
4
1
IP protocol byte
*/
fields[4] = {
	length: 1,
	name: 'PROTOCOL'
}


/*
SRC_TOS
5
1
Type of Service byte setting when entering incoming interface
*/
fields[5] = {
	length: 1,
	name: 'SRC_TOS'
}

/*
TCP_FLAGS
6
1
Cumulative of all the TCP flags seen for this flow
*/
fields[6] = {
	length: 1,
	name: 'TCP_FLAGS'
}

/*
L4_SRC_PORT
7
2
TCP/UDP source port number i.e.: FTP, Telnet, or equivalent
*/
fields[7] = {
	length: 2,
	name: 'L4_SRC_PORT'
}

/*
IPV4_SRC_ADDR
8
4
IPv4 source address
*/
fields[8] = {
	length: 4,
	name: 'IPV4_SRC_ADDR',

	// Decodes to IPv4
	decode: decoders.decodeIPv4
}

/*
SRC_MASK
9
1
The number of contiguous bits in the source address subnet mask i.e.: the submask in slash notation
*/
fields[9] = {
	length: 1,
	name: 'SRC_MASK'
}

/*
INPUT_SNMP
10
N
Input interface index; default for N is 2 but higher values could be used
*/
fields[10] = {
	length: 2,
	name: 'INPUT_SNMP'
}

/*
L4_DST_PORT
11
2
TCP/UDP destination port number i.e.: FTP, Telnet, or equivalent
*/
fields[11] = {
	length: 2,
	name: 'L4_DST_PORT'
}

/*
IPV4_DST_ADDR
12
4
IPv4 destination address
*/
fields[12] = {
	length: 2,
	name: 'IPV4_DST_ADDR'
}

/*
DST_MASK
13
1
The number of contiguous bits in the destination address subnet mask i.e.: the submask in slash notation
*/
fields[13] = {
	length: 1,
	name: 'DST_MASK'
}

/*
OUTPUT_SNMP
14
N
Output interface index; default for N is 2 but higher values could be used
*/
fields[14] = {
	length: 2,
	name: 'OUTPUT_SNMP'
}

/*
IPV4_NEXT_HOP
15
4
IPv4 address of next-hop router
*/
fields[15] = {
	length: 4,
	name: 'IPV4_NEXT_HOP'
}

/*
SRC_AS
16
N (default is 2)
Source BGP autonomous system number where N could be 2 or 4
*/
fields[16] = {
	length: 2,
	name: 'SRC_AS'
}

/*
DST_AS
17
N (default is 2)
Destination BGP autonomous system number where N could be 2 or 4
*/
fields[17] = {
	length: 2,
	name: 'DST_AS'
}

/*
BGP_IPV4_NEXT_HOP
18
4
Next-hop router's IP in the BGP domain
*/
fields[18] = {
	length: 4,
	name: 'BGP_IPV4_NEXT_HOP'
}

/*
MUL_DST_PKTS
19
N (default is 4)
IP multicast outgoing packet counter with length N x 8 bits for packets associated with the IP Flow
*/
fields[19] = {
	length: 4,
	name: 'MUL_DST_PKTS'
}

/*
MUL_DST_BYTES
20
N (default is 4)
IP multicast outgoing byte counter with length N x 8 bits for bytes associated with the IP Flow
*/
fields[20] = {
	length: 4,
	name: 'MUL_DST_BYTES'
}

/*
LAST_SWITCHED
21
4
System uptime at which the last packet of this flow was switched
*/
fields[21] = {
	length: 4,
	name: 'LAST_SWITCHED'
}

/*
FIRST_SWITCHED
22
4
System uptime at which the first packet of this flow was switched
*/
fields[22] = {
	length: 4,
	name: 'FIRST_SWITCHED'
}

/*
OUT_BYTES
23
N (default is 4)
Outgoing counter with length N x 8 bits for the number of bytes associated with an IP Flow
*/
fields[23] = {
	length: 4,
	name: 'OUT_BYTES'
}

/*
OUT_PKTS
24
N (default is 4)
Outgoing counter with length N x 8 bits for the number of packets associated with an IP Flow.
*/
fields[24] = {
	length: 4,
	name: 'OUT_PKTS'
}

/*
MIN_PKT_LNGTH
25
2
Minimum IP packet length on incoming packets of the flow
*/
fields[25] = {
	length: 2,
	name: 'MIN_PKT_LNGTH'
}

/*
MAX_PKT_LNGTH
26
2
Maximum IP packet length on incoming packets of the flow
*/
fields[26] = {
	length: 2,
	name: 'MAX_PKT_LNGTH'
}

/*
IPV6_SRC_ADDR
27
16
IPv6 Source Address
*/
fields[27] = {
	length: 16,
	name: 'IPV6_SRC_ADDR'
}

/*
IPV6_DST_ADDR
28
16
IPv6 Destination Address
*/
fields[28] = {
	length: 16,
	name: 'IPV6_DST_ADDR'
}

/*
IPV6_SRC_MASK
29
1
Length of the IPv6 source mask in contiguous bits
*/
fields[29] = {
	length: 1,
	name: 'IPV6_SRC_MASK'
}

/*
IPV6_DST_MASK
30
1
Length of the IPv6 destination mask in contiguous bits
*/
fields[30] = {
	length: 1,
	name: 'IPV6_DST_MASK'
}

/*
IPV6_FLOW_LABEL
31
3
IPv6 flow label as per RFC 2460 definition
*/
fields[31] = {
	length: 3,
	name: 'IPV6_FLOW_LABEL'
}

/*
ICMP_TYPE
32
2
Internet Control Message Protocol (ICMP) packet type; reported as ((ICMP Type*256) + ICMP code)
*/
fields[32] = {
	length: 2,
	name: 'ICMP_TYPE'
}

/*
MUL_IGMP_TYPE
33
1
Internet Group Management Protocol (IGMP) packet type
*/
fields[33] = {
	length: 1,
	name: 'MUL_IGMP_TYPE'
}

/*
SAMPLING_INTERVAL
34
4
When using sampled NetFlow, the rate at which packets are sampled i.e.: a value of 100 indicates that one of every 100 packets is sampled
*/
fields[34] = {
	length: 4,
	name: 'SAMPLING_INTERVAL'
}

/*
SAMPLING_ALGORITHM
35
1
The type of algorithm used for sampled NetFlow: 0x01 Deterministic Sampling ,0x02 Random Sampling
*/
fields[35] = {
	length: 1,
	name: 'SAMPLING_ALGORITHM'
}

/*
FLOW_ACTIVE_TIMEOUT
36
2
Timeout value (in seconds) for active flow entries in the NetFlow cache
*/
fields[36] = {
	length: 2,
	name: 'FLOW_ACTIVE_TIMEOUT'
}

/*
FLOW_INACTIVE_TIMEOUT
37
2
Timeout value (in seconds) for inactive flow entries in the NetFlow cache
*/
fields[37] = {
	length: 2,
	name: 'FLOW_INACTIVE_TIMEOUT'
}

/*
ENGINE_TYPE
38
1
Type of flow switching engine: RP = 0, VIP/Linecard = 1
*/
fields[38] = {
	length: 1,
	name: 'ENGINE_TYPE'
}

/*
ENGINE_ID
39
1
ID number of the flow switching engine
*/
fields[39] = {
	length: 1,
	name: 'ENGINE_ID'
}

/*
TOTAL_BYTES_EXP
40
N (default is 4)
Counter with length N x 8 bits for bytes for the number of bytes exported by the Observation Domain
*/
fields[40] = {
	length: 4,
	name: 'TOTAL_BYTES_EXP'
}

/*
TOTAL_PKTS_EXP
41
N (default is 4)
Counter with length N x 8 bits for bytes for the number of packets exported by the Observation Domain
*/
fields[41] = {
	length: 4,
	name: 'TOTAL_PKTS_EXP'
}

/*
TOTAL_FLOWS_EXP
42
N (default is 4)
Counter with length N x 8 bits for bytes for the number of flows exported by the Observation Domain
*/
fields[42] = {
	length: 4,
	name: ''
}

/*
*Vendor Proprietary*
43
*/

//fields[] = {
//	length: ,
//	name: ''
//}

/*
IPV4_SRC_PREFIX
44
4
IPv4 source address prefix (specific for Catalyst architecture)
*/
fields[44] = {
	length: 4,
	name: 'IPV4_SRC_PREFIX'
}

/*
IPV4_DST_PREFIX
45
4
IPv4 destination address prefix (specific for Catalyst architecture)
*/
fields[45] = {
	length: 4,
	name: 'IPV4_DST_PREFIX'
}

/*
MPLS_TOP_LABEL_TYPE
46
1
MPLS Top Label Type: 0x00 UNKNOWN 0x01 TE-MIDPT 0x02 ATOM 0x03 VPN 0x04 BGP 0x05 LDP
*/
fields[46] = {
	length: 1,
	name: 'MPLS_TOP_LABEL_TYPE'
}

/*
MPLS_TOP_LABEL_IP_ADDR
47
4
Forwarding Equivalent Class corresponding to the MPLS Top Label
*/
fields[47] = {
	length: 4,
	name: 'MPLS_TOP_LABEL_IP_ADDR'
}

/*
FLOW_SAMPLER_ID
48
1
Identifier shown in "show flow-sampler"
*/
fields[48] = {
	length: 1,
	name: 'FLOW_SAMPLER_ID'
}

/*
FLOW_SAMPLER_MODE
49
1
The type of algorithm used for sampling data: 0x02 random sampling. Use in connection with FLOW_SAMPLER_MODE
*/
fields[49] = {
	length: 1,
	name: 'FLOW_SAMPLER_MODE'
}

/*
FLOW_SAMPLER_RANDOM_INTERVAL
50
4
Packet interval at which to sample. Use in connection with FLOW_SAMPLER_MODE
*/
fields[50] = {
	length: 4,
	name: 'FLOW_SAMPLER_RANDOM_INTERVAL'
}

/*
*Vendor Proprietary*
51
*/

/*fields[] = {
	length: ,
	name: ''
}*/

/*
MIN_TTL
52
1
Minimum TTL on incoming packets of the flow
*/
fields[52] = {
	length: 1,
	name: 'MIN_TTL'
}

/*
MAX_TTL
53
1
Maximum TTL on incoming packets of the flow
*/
fields[53] = {
	length: 1,
	name: 'MAX_TTL'
}

/*
IPV4_IDENT
54
2
The IP v4 identification field
*/
fields[54] = {
	length: 2,
	name: 'IPV4_IDENT'
}

/*
DST_TOS
55
1
Type of Service byte setting when exiting outgoing interface
*/
fields[55] = {
	length: 1,
	name: 'DST_TOS'
}

/*
IN_SRC_MAC
56
6
Incoming source MAC address
*/
fields[56] = {
	length: 6,
	name: 'IN_SRC_MAC'
}

/*
OUT_DST_MAC
57
6
Outgoing destination MAC address
*/
fields[57] = {
	length: 6,
	name: 'OUT_DST_MAC'
}

/*
SRC_VLAN
58
2
Virtual LAN identifier associated with ingress interface
*/
fields[58] = {
	length: 2,
	name: 'SRC_VLAN'
}

/*
DST_VLAN
59
2
Virtual LAN identifier associated with egress interface
*/
fields[59] = {
	length: 2,
	name: 'DST_VLAN'
}

/*
IP_PROTOCOL_VERSION
60
1
Internet Protocol Version Set to 4 for IPv4, set to 6 for IPv6. If not present in the template, then version 4 is assumed.
*/
fields[60] = {
	length: 1,
	name: ''
}

/*
DIRECTION
61
1
Flow direction: 0 - ingress flow, 1 - egress flow
*/
fields[61] = {
	length: 1,
	name: 'DIRECTION'
}

/*
IPV6_NEXT_HOP
62
16
IPv6 address of the next-hop router
*/
fields[62] = {
	length: 16,
	name: 'IPV6_NEXT_HOP'
}

/*
BPG_IPV6_NEXT_HOP
63
16
Next-hop router in the BGP domain
*/
fields[63] = {
	length: 16,
	name: 'BPG_IPV6_NEXT_HOP'
}

/*
IPV6_OPTION_HEADERS
64
4
Bit-encoded field identifying IPv6 option headers found in the flow
*/
fields[64] = {
	length: 4,
	name: 'IPV6_OPTION_HEADERS'
}

/*
*Vendor Proprietary*
65
  *Vendor Proprietary*
66
  *Vendor Proprietary*
67
  *Vendor Proprietary*
68
  *Vendor Proprietary*
69
*/

/*
MPLS_LABEL_1
70
3
MPLS label at position 1 in the stack. This comprises 20 bits of MPLS label, 3 EXP (experimental) bits and 1 S (end-of-stack) bit.
*/
fields[70] = {
	length: 3,
	name: 'MPLS_LABEL_1'
}

/*
MPLS_LABEL_2
71
3
MPLS label at position 2 in the stack. This comprises 20 bits of MPLS label, 3 EXP (experimental) bits and 1 S (end-of-stack) bit.
*/
fields[71] = {
	length: 3,
	name: 'MPLS_LABEL_2'
}

/*
MPLS_LABEL_3
72
3
MPLS label at position 3 in the stack. This comprises 20 bits of MPLS label, 3 EXP (experimental) bits and 1 S (end-of-stack) bit.
*/
fields[72] = {
	length: 3,
	name: 'MPLS_LABEL_3'
}

/*
MPLS_LABEL_4
73
3
MPLS label at position 4 in the stack. This comprises 20 bits of MPLS label, 3 EXP (experimental) bits and 1 S (end-of-stack) bit.
*/
fields[73] = {
	length: 3,
	name: 'MPLS_LABEL_4'
}

/*
MPLS_LABEL_5
74
3
MPLS label at position 5 in the stack. This comprises 20 bits of MPLS label, 3 EXP (experimental) bits and 1 S (end-of-stack) bit.
*/
fields[74] = {
	length: 3,
	name: 'MPLS_LABEL_5'
}

/*
MPLS_LABEL_6
75
3
MPLS label at position 6 in the stack. This comprises 20 bits of MPLS label, 3 EXP (experimental) bits and 1 S (end-of-stack) bit.
*/
fields[75] = {
	length: 3,
	name: 'MPLS_LABEL_6'
}

/*
MPLS_LABEL_7
76
3
MPLS label at position 7 in the stack. This comprises 20 bits of MPLS label, 3 EXP (experimental) bits and 1 S (end-of-stack) bit.
*/
fields[76] = {
	length: 3,
	name: 'MPLS_LABEL_7'
}

/*
MPLS_LABEL_8
77
3
MPLS label at position 8 in the stack. This comprises 20 bits of MPLS label, 3 EXP (experimental) bits and 1 S (end-of-stack) bit.
*/
fields[77] = {
	length: 3,
	name: 'MPLS_LABEL_8'
}

/*
MPLS_LABEL_9
78
3
MPLS label at position 9 in the stack. This comprises 20 bits of MPLS label, 3 EXP (experimental) bits and 1 S (end-of-stack) bit.
*/
fields[78] = {
	length: 3,
	name: 'MPLS_LABEL_9'
}

/*
MPLS_LABEL_10
79
3
MPLS label at position 10 in the stack. This comprises 20 bits of MPLS label, 3 EXP (experimental) bits and 1 S (end-of-stack) bit.
*/
fields[79] = {
	length: 3,
	name: 'MPLS_LABEL_10'
}

/*
IN_DST_MAC
80
6
Incoming destination MAC address
*/
fields[80] = {
	length: 6,
	name: 'IN_DST_MAC'
}

/*
OUT_SRC_MAC
81
6
Outgoing source MAC address
*/
fields[81] = {
	length: 6,
	name: 'OUT_SRC_MAC'
}

/*
IF_NAME
82
N (default specified in template)
Shortened interface name i.e.: "FE1/0"
*/
fields[82] = {
	length: 8,
	name: 'IF_NAME'
}

/*
IF_DESC
83
N (default specified in template)
Full interface name i.e.: "'FastEthernet 1/0"
*/
fields[83] = {
	length: 8,
	name: 'IF_DESC'
}

/*
SAMPLER_NAME
84
N (default specified in template)
Name of the flow sampler
*/
fields[84] = {
	length: 8,
	name: 'SAMPLER_NAME'
}

/*
IN_ PERMANENT _BYTES
85
N (default is 4)
Running byte counter for a permanent flow
*/
fields[85] = {
	length: 4,
	name: 'IN_PERMANENT_BYTES'
}

/*
IN_ PERMANENT _PKTS
86
N (default is 4)
Running packet counter for a permanent flow
*/
fields[86] = {
	length: 4,
	name: 'IN_PERMANENT_PKTS'
}

/*
* Vendor Proprietary*
87

/*fields[] = {
	length: ,
	name: ''
}*/

/*
FRAGMENT_OFFSET
88
2
The fragment-offset value from fragmented IP packets
*/
fields[88] = {
	length: 2,
	name: 'FRAGMENT_OFFSET'
}

/*
FORWARDING STATUS
89
1
Forwarding status is encoded on 1 byte with the 2 left bits giving the status and the 6 remaining bits giving the reason code.

Status is either unknown (00), Forwarded (10), Dropped (10) or Consumed (11).
Below is the list of forwarding status values with their means.
Unknown
• 0
Forwarded
• Unknown 64
• Forwarded Fragmented 65
• Forwarded not Fragmented 66
Dropped
• Unknown 128,
• Drop ACL Deny 129,
• Drop ACL drop 130,
• Drop Unroutable 131,
• Drop Adjacency 132,
• Drop Fragmentation & DF set 133,
• Drop Bad header checksum 134,
• Drop Bad total Length 135,
• Drop Bad Header Length 136,
• Drop bad TTL 137,
• Drop Policer 138,
• Drop WRED 139,
• Drop RPF 140,
• Drop For us 141,
• Drop Bad output interface 142,
• Drop Hardware 143,
Consumed
• Unknown 192,
• Terminate Punt Adjacency 193,
• Terminate Incomplete Adjacency 194,
• Terminate For us 195
*/
fields[89] = {
	length: 1,
	name: 'FORWARDING_STATUS'
}

/*
MPLS PAL RD
90
8 (array)
MPLS PAL Route Distinguisher.
*/
fields[90] = {
	length: 8,
	name: 'MPLS_PAL_RD'
}

/*
MPLS PREFIX LEN
91
1
Number of consecutive bits in the MPLS prefix length.
*/
fields[91] = {
	length: 1,
	name: 'MPLS_PREFIX_LEN'
}

/*
SRC TRAFFIC INDEX
92
4
BGP Policy Accounting Source Traffic Index
*/
fields[92] = {
	length: 4,
	name: 'SRC_TRAFFIC_INDEX'
}

/*
DST TRAFFIC INDEX
93
4
BGP Policy Accounting Destination Traffic Index
*/
fields[93] = {
	length: 4,
	name: 'DST_TRAFFIC_INDEX'
}

/*
APPLICATION DESCRIPTION
94
N
Application description.
*/
fields[94] = {
	length: 8,
	name: 'APPLICATION_DESCRIPTION'
}

/*
APPLICATION TAG
95
1+n
8 bits of engine ID, followed by n bits of classification.
*/
fields[95] = {
	length: 8,
	name: 'APPLICATION_TAG'
}

/*
APPLICATION NAME
96
N
Name associated with a classification.
*/
fields[96] = {
	length: 8,
	name: 'APPLICATION_NAME'
}

/*
postipDiffServCodePoint
98
1
The value of a Differentiated Services Code Point (DSCP) encoded in the Differentiated Services Field, after modification.
*/
fields[98] = {
	length: 1,
	name: 'postipDiffServCodePoints'
}

/*
replication factor
99
4
Multicast replication factor.
*/
fields[99] = {
	length: 4,
	name: 'replicationFactor'
}

/*
DEPRECATED
100
N
DEPRECATED
*/

/*fields[] = {
	length: ,
	name: ''
}*/

/*
layer2packetSectionOffset
102
 Layer 2 packet section offset. Potentially a generic offset.
 */
fields[102] = {
	length: 8,
	name: ''
}

/*
layer2packetSectionSize
103
 Layer 2 packet section size. Potentially a generic size.
 */
fields[103] = {
	length: 8,
	name: 'layer2packetSectionSize'
}

/*
layer2packetSectionData
104
Layer 2 packet section data.
*/
fields[104] = {
	length: 8,
	name: 'layer2packetSectionData'
}

/*
 105 to 127
 **Reserved for future use by cisco**
*/

module.exports = fields
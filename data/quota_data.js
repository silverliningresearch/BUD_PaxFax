    let airport_airline_quota = `
    [
        {"Airport_Airline": "ATH-A3", "Quota": "3"},
{"Airport_Airline": "CDG-AF", "Quota": "18"},
{"Airport_Airline": "HEL-AY", "Quota": "10"},
{"Airport_Airline": "LHR-BA", "Quota": "25"},
{"Airport_Airline": "RIX-BT", "Quota": "3"},
{"Airport_Airline": "TLV-BZ", "Quota": "4"},
{"Airport_Airline": "CKG-CA", "Quota": "2"},
{"Airport_Airline": "ARN-DY", "Quota": "2"},
{"Airport_Airline": "CPH-DY", "Quota": "7"},
{"Airport_Airline": "OSL-DY", "Quota": "11"},
{"Airport_Airline": "BSL-EC", "Quota": "9"},
{"Airport_Airline": "GVA-EC", "Quota": "5"},
{"Airport_Airline": "LGW-EC", "Quota": "7"},
{"Airport_Airline": "DUB-EI", "Quota": "4"},
{"Airport_Airline": "DXB-EK", "Quota": "13"},
{"Airport_Airline": "CGN-EW", "Quota": "5"},
{"Airport_Airline": "DUS-EW", "Quota": "11"},
{"Airport_Airline": "HAM-EW", "Quota": "6"},
{"Airport_Airline": "STR-EW", "Quota": "11"},
{"Airport_Airline": "PVG-FM", "Quota": "5"},
{"Airport_Airline": "AGP-FR", "Quota": "3"},
{"Airport_Airline": "AHO-FR", "Quota": "1"},
{"Airport_Airline": "AMM-FR", "Quota": "2"},
{"Airport_Airline": "ARN-FR", "Quota": "5"},
{"Airport_Airline": "ATH-FR", "Quota": "4"},
{"Airport_Airline": "BCN-FR", "Quota": "9"},
{"Airport_Airline": "BER-FR", "Quota": "9"},
{"Airport_Airline": "BFS-FR", "Quota": "2"},
{"Airport_Airline": "BGY-FR", "Quota": "14"},
{"Airport_Airline": "BLL-FR", "Quota": "5"},
{"Airport_Airline": "BLQ-FR", "Quota": "3"},
{"Airport_Airline": "BOH-FR", "Quota": "2"},
{"Airport_Airline": "BOJ-FR", "Quota": "1"},
{"Airport_Airline": "BRI-FR", "Quota": "6"},
{"Airport_Airline": "BRS-FR", "Quota": "3"},
{"Airport_Airline": "BVA-FR", "Quota": "6"},
{"Airport_Airline": "CAG-FR", "Quota": "2"},
{"Airport_Airline": "CFU-FR", "Quota": "2"},
{"Airport_Airline": "CHQ-FR", "Quota": "1"},
{"Airport_Airline": "CIA-FR", "Quota": "13"},
{"Airport_Airline": "CPH-FR", "Quota": "8"},
{"Airport_Airline": "CRL-FR", "Quota": "10"},
{"Airport_Airline": "CTA-FR", "Quota": "3"},
{"Airport_Airline": "DUB-FR", "Quota": "8"},
{"Airport_Airline": "EDI-FR", "Quota": "6"},
{"Airport_Airline": "EMA-FR", "Quota": "2"},
{"Airport_Airline": "GOT-FR", "Quota": "3"},
{"Airport_Airline": "JMK-FR", "Quota": "1"},
{"Airport_Airline": "LIS-FR", "Quota": "3"},
{"Airport_Airline": "LPA-FR", "Quota": "1"},
{"Airport_Airline": "MAD-FR", "Quota": "4"},
{"Airport_Airline": "MAN-FR", "Quota": "5"},
{"Airport_Airline": "MLA-FR", "Quota": "5"},
{"Airport_Airline": "MRS-FR", "Quota": "3"},
{"Airport_Airline": "NAP-FR", "Quota": "5"},
{"Airport_Airline": "NUE-FR", "Quota": "3"},
{"Airport_Airline": "OPO-FR", "Quota": "2"},
{"Airport_Airline": "PFO-FR", "Quota": "7"},
{"Airport_Airline": "PMI-FR", "Quota": "6"},
{"Airport_Airline": "PMO-FR", "Quota": "3"},
{"Airport_Airline": "POZ-FR", "Quota": "5"},
{"Airport_Airline": "PRG-FR", "Quota": "9"},
{"Airport_Airline": "PSA-FR", "Quota": "4"},
{"Airport_Airline": "PVK-FR", "Quota": "1"},
{"Airport_Airline": "RHO-FR", "Quota": "1"},
{"Airport_Airline": "RMI-FR", "Quota": "3"},
{"Airport_Airline": "SKG-FR", "Quota": "3"},
{"Airport_Airline": "SNN-FR", "Quota": "2"},
{"Airport_Airline": "SOF-FR", "Quota": "2"},
{"Airport_Airline": "STN-FR", "Quota": "33"},
{"Airport_Airline": "TLV-FR", "Quota": "9"},
{"Airport_Airline": "TSF-FR", "Quota": "3"},
{"Airport_Airline": "VLC-FR", "Quota": "2"},
{"Airport_Airline": "WMI-FR", "Quota": "4"},
{"Airport_Airline": "ZAD-FR", "Quota": "1"},
{"Airport_Airline": "ZTH-FR", "Quota": "0"},
{"Airport_Airline": "DXB-FZ", "Quota": "7"},
{"Airport_Airline": "MAD-IB", "Quota": "8"},
{"Airport_Airline": "BEG-JU", "Quota": "7"},
{"Airport_Airline": "ICN-KE", "Quota": "5"},
{"Airport_Airline": "AMS-KL", "Quota": "30"},
{"Airport_Airline": "CLJ-KS", "Quota": "1"},
{"Airport_Airline": "OTP-KS", "Quota": "1"},
{"Airport_Airline": "KWI-KU", "Quota": "0"},
{"Airport_Airline": "LUX-LG", "Quota": "2"},
{"Airport_Airline": "FRA-LH", "Quota": "33"},
{"Airport_Airline": "MUC-LH", "Quota": "24"},
{"Airport_Airline": "ICN-LO", "Quota": "7"},
{"Airport_Airline": "WAW-LO", "Quota": "15"},
{"Airport_Airline": "BHX-LS", "Quota": "1"},
{"Airport_Airline": "LBA-LS", "Quota": "1"},
{"Airport_Airline": "MAN-LS", "Quota": "5"},
{"Airport_Airline": "ZRH-LX", "Quota": "18"},
{"Airport_Airline": "TLV-LY", "Quota": "10"},
{"Airport_Airline": "CAI-MS", "Quota": "3"},
{"Airport_Airline": "VIE-OS", "Quota": "14"},
{"Airport_Airline": "SAW-PC", "Quota": "9"},
{"Airport_Airline": "DOH-QR", "Quota": "6"},
{"Airport_Airline": "OTP-RO", "Quota": "5"},
{"Airport_Airline": "HRG-SM", "Quota": "1"},
{"Airport_Airline": "BRU-SN", "Quota": "10"},
{"Airport_Airline": "IST-TK", "Quota": "23"},
{"Airport_Airline": "SAW-TK", "Quota": "4"},
{"Airport_Airline": "CLJ-W2", "Quota": "0"},
{"Airport_Airline": "AGP-W6", "Quota": "6"},
{"Airport_Airline": "AHO-W6", "Quota": "1"},
{"Airport_Airline": "ALC-W6", "Quota": "5"},
{"Airport_Airline": "AMM-W6", "Quota": "3"},
{"Airport_Airline": "ATH-W6", "Quota": "7"},
{"Airport_Airline": "AUH-W6", "Quota": "4"},
{"Airport_Airline": "AYT-W6", "Quota": "2"},
{"Airport_Airline": "BCN-W6", "Quota": "13"},
{"Airport_Airline": "BER-W6", "Quota": "8"},
{"Airport_Airline": "BHX-W6", "Quota": "3"},
{"Airport_Airline": "BOJ-W6", "Quota": "1"},
{"Airport_Airline": "BRI-W6", "Quota": "7"},
{"Airport_Airline": "BSL-W6", "Quota": "8"},
{"Airport_Airline": "CDT-W6", "Quota": "3"},
{"Airport_Airline": "CFU-W6", "Quota": "1"},
{"Airport_Airline": "CHQ-W6", "Quota": "1"},
{"Airport_Airline": "CRL-W6", "Quota": "10"},
{"Airport_Airline": "CTA-W6", "Quota": "4"},
{"Airport_Airline": "DMM-W6", "Quota": "3"},
{"Airport_Airline": "DTM-W6", "Quota": "6"},
{"Airport_Airline": "DXB-W6", "Quota": "4"},
{"Airport_Airline": "EDI-W6", "Quota": "2"},
{"Airport_Airline": "EIN-W6", "Quota": "15"},
{"Airport_Airline": "FCO-W6", "Quota": "10"},
{"Airport_Airline": "FNC-W6", "Quota": "3"},
{"Airport_Airline": "GYD-W6", "Quota": "3"},
{"Airport_Airline": "HER-W6", "Quota": "1"},
{"Airport_Airline": "HRG-W6", "Quota": "3"},
{"Airport_Airline": "IST-W6", "Quota": "10"},
{"Airport_Airline": "JED-W6", "Quota": "3"},
{"Airport_Airline": "JTR-W6", "Quota": "1"},
{"Airport_Airline": "KEF-W6", "Quota": "4"},
{"Airport_Airline": "KUT-W6", "Quota": "4"},
{"Airport_Airline": "LCA-W6", "Quota": "9"},
{"Airport_Airline": "LGW-W6", "Quota": "6"},
{"Airport_Airline": "LIS-W6", "Quota": "7"},
{"Airport_Airline": "LPL-W6", "Quota": "3"},
{"Airport_Airline": "LTN-W6", "Quota": "31"},
{"Airport_Airline": "MAD-W6", "Quota": "6"},
{"Airport_Airline": "MLA-W6", "Quota": "5"},
{"Airport_Airline": "MMX-W6", "Quota": "4"},
{"Airport_Airline": "MXP-W6", "Quota": "16"},
{"Airport_Airline": "NAP-W6", "Quota": "6"},
{"Airport_Airline": "NCE-W6", "Quota": "6"},
{"Airport_Airline": "NYO-W6", "Quota": "6"},
{"Airport_Airline": "ORY-W6", "Quota": "7"},
{"Airport_Airline": "PMI-W6", "Quota": "1"},
{"Airport_Airline": "RHO-W6", "Quota": "1"},
{"Airport_Airline": "RUH-W6", "Quota": "3"},
{"Airport_Airline": "SKG-W6", "Quota": "3"},
{"Airport_Airline": "SKP-W6", "Quota": "3"},
{"Airport_Airline": "TFS-W6", "Quota": "5"},
{"Airport_Airline": "TGD-W6", "Quota": "3"},
{"Airport_Airline": "TGM-W6", "Quota": "7"},
{"Airport_Airline": "TIA-W6", "Quota": "3"},
{"Airport_Airline": "TLV-W6", "Quota": "16"},
{"Airport_Airline": "WAW-W6", "Quota": "3"},
{"Airport_Airline": "ZTH-W6", "Quota": "1"},
{"Airport_Airline": "ADB-XQ", "Quota": "1"},
{"Airport_Airline": "AYT-XQ", "Quota": "7"}
       
       
        
]
            
     
    `;

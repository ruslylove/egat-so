var sw = {
  orders: [
    {
      type: "common",
      message: "ศูนย์ฯลำภูรา แจ้ง HKH จะปลดสายส่ง 115 kV NT-CY1 #2"
    },
    {
      type: "common",
      message:
        "ศูนย์ฯลำภูรา ตรวจสอบ Power Flow 115 kV Line NT-CY1 #1,2 รวมกันไม่เกิน Capacity วงจร 1"
    },
    {
      type: "common",
      message:
        "ศูนย์ฯลำภูรา ตรวจสอบ Operator สฟ.NT.CYI พร้อมทำ Switching ด้วยความปลอดภัย"
    },
    {
      type: "common",
      message: 'สฟ.NT.CYI ย้าย R3RCC ไปตำแหน่ง "LOCAL"'
    },
    {
      type: "common",
      message: 'สฟ.NT ตรวจสอบ NT 7025 อยู่ในสภาพ "ปลด"'
    },
    {
      type: "common",
      message: 'สฟ.NT "OFF" Recloser NT 7022'
    },
    {
      type: "common",
      message: 'สฟ.CYI ตรวจสอบ NT 7026 อยู่ในสภาพ "ปลด"'
    },
    {
      type: "common",
      message: 'สฟ.CYI "OFF" Recloser CYI 7022'
    },
    {
      type: "permission",
      message: 'สฟ.CYI "ON" Permissive Switch CYI 7022',
      switch: "CYI 7022",
      action: "ON"
    },
    {
      type: "common",
      message: 'ปลด CYI  7022 ใส่ TAG แขวนป้าย "ห้ามสับ"'
    },
    {
      type: "permission",
      message: 'สฟ.CYI "OFF" Permissive Switch CYI 7022',
      switch: "CYI 7022",
      action: "OFF"
    },
    {
      type: "permission",
      message: 'สฟ.NT "ON" Permissive Switch NT 7022',
      switch: "NT 7022",
      action: "ON"
    },
    {
      type: "common",
      message: 'ปลด NT  7022 ใส่ TAG แขวนป้าย "ห้ามสับ"'
    },
    {
      type: "permission",
      message: 'สฟ.NT "OFF" Permissive Switch NT 7022',
      switch: "NT 7022",
      action: "OFF"
    }
  ]
};

export default sw;

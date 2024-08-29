interface MemberDataType {
  id: number;
  name: string;
  designation: string;
  contacts: {
    email?: string;
    fb: string;
    telegram?: string;
    twitter?: string;
    instagram?: string;
  };
}

export const teamMembersData: MemberDataType[] = [
  {
    id: 1,
    name: "Md Abdul Kader",
    designation: "President",
    contacts: {
      email: "mdakader20@gmail.com",
      fb: "https://www.facebook.com/kader00013",
      telegram: "https://t.me/kader00013",
      twitter: "https://x.com/kader_r3",
      instagram: "https://www.instagram.com/kader00013",
    },
  },
  {
    id: 2,
    name: "Md Nazmul Hossain",
    designation: "Vice President",
    contacts: {
      fb: "https://www.facebook.com/sadamataN",
    },
  },
  {
    id: 3,
    name: "Md Shiful Islam",
    designation: "General Secretary",
    contacts: {
      fb: "https://www.facebook.com/shiful.islam65",
    },
  },
  {
    id: 4,
    name: "Md Mohiuddin Hossain",
    designation: "Joint General Secretary",
    contacts: {
      fb: "https://www.facebook.com/mohiuddin.hossain.9277",
    },
  },
  {
    id: 5,
    name: "Md Abdul Gofur",
    designation: "Cashier",
    contacts: {
      fb: "https://www.facebook.com/profile.php?id=100004169506568",
    },
  },
  {
    id: 6,
    name: "Md Selim Ullah",
    designation: "Executive Member",
    contacts: {
      fb: "https://www.facebook.com/mdsalim.ullah.739",
    },
  },
  {
    id: 7,
    name: "Shamima Afrin Lima",
    designation: "Executive Member",
    contacts: {
      fb: "https://www.facebook.com/shamimaafrin.lima",
    },
  },
];


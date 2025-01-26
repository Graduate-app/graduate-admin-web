export interface IDegree {
  id: number;
  degree: 'bachelor' | 'magister' | 'aspirant';
  major: 'computerEngineering' | 'electronics';
  qualificationWork: string;
  enrollmentYear: number;
  graduationYear: number;
}

export interface IGraduate {
  id: number;
  status: 'pending' | 'applied' | 'rejected';
  firstName: string;
  lastName: string;
  patronymic: string;
  email: string;
  phoneNumber: string;
  job: string;
  departamentHelping: 'lessons' | 'financial' | 'accreditation' | 'nothing';
  degree: IDegree[];
  profilePicture: IProfilePicture | null; 
}

export interface IProfilePicture {
  id: number;
  src: string;
}
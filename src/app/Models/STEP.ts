export interface STEP
{
    step_Id :number;
    user_Id:number;
    Firstname :string;
    lastname : string;
    age : number;
    is_Married : string;
    spouse_Name : string;
    fathername : string;
    mothername:string;
    address : string;
    state : string;
    city : string;
    pincode:string;
    user_Photo: File;
    identity_Proof: string;
    identity_Proof_Image : File;
    is_Approoved:number;
}
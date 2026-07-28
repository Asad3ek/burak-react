import { MemberStatus, MemberType } from "../enums/member.enum";

export interface Member {
    _id: string,
    memberType: MemberType,
    memberStatus: MemberStatus,
    memberNick: string,
    memberPhone: string,
    memberPassword?: string,
    memberPoints: number,
    memberImage?: string,
    memberAddress?: string,
    memberDesc?: string,
    createdAt: Date,
    updateddAt: Date,
}


export interface MemberInput {
    memberType?: MemberType,
    memberStatus?: MemberStatus,
    memberNick: string,
    memberPhone: string,
    memberPassword: string,
    memberImage?: string,
    memberAddress?: string,
    memberDesc?: string,
    memberPoint?: number,
}

export interface LoginInput {
    memberNick: string,
    memberPassword: string,
}

export interface MemberUpdateInput {
    memberNick?: string,
    memberPhone?: string,
    memberPassword?: string,
    memberImage?: string,
    memberAddress?: string,
    memberDesc?: string,
}

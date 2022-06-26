
export interface PersonalT {
  creator_first_name: string;
  creator_last_name: string;
  creator_address: string;
  creator_postcode: string;
  creator_city: string;
  creator_birthday: string;
  creatorCategories?: string[];
}
export interface SocialT {
  creator_insta: boolean;
  creator_insta_name: string;
  creator_twitter: boolean;
  creator_twitter_name: string;
  creator_facebook: boolean;
  creator_facebook_name: string;
  creator_tiktok: boolean;
  creator_tiktok_name: string;
  creator_youtube: boolean;
  creator_youtube_name: string;
  creator_linkedin: boolean;
  creator_linkedin_name: string;
  // images
}
export interface ContactT {
  creator_email: string;
  creator_phone: string;
  creator_message: string;
}





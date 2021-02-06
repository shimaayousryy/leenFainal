
export const BaseURL = "http://leennew.souq-athar.com/leen";
export const LeenAPI_URL = BaseURL + '/public/api';

export class END_POINTS {

  // api product
  // public static product =   LeenAPI_URL + "/product";

  public static product_By_Id = LeenAPI_URL + "/categoty_product";

  // api all product without action
  public static product_no_action = LeenAPI_URL + "/all_product";
  public static category_no_action = LeenAPI_URL + "/all_category";


  // public static product_By_price =   LeenAPI_URL + "/product_price"; 

  // api category
  // public static category =   LeenAPI_URL + "/category";

  //api  sign_up
  public static sign_up = LeenAPI_URL + "/auth/register";




  // api cites
  public static city = LeenAPI_URL + "/all_city"

  // api contract
  public static contract = LeenAPI_URL + "/user_contract"
  //api contract duration
  public static contract_duration = LeenAPI_URL + "/all_duration"
  //api contract timing
  public static contract_timing = LeenAPI_URL + "/all_timing"
  // contactUs api
  public static contact_us = LeenAPI_URL + "/contact_us"

  // login api
  public static log_in = LeenAPI_URL + "/auth/login"

  // confirm phone number api
  public static confirm_number = LeenAPI_URL + "/otp-resend"
}



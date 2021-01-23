
export const BaseURL = "http://leennew.souq-athar.com/leen";
export const   LeenAPI_URL = BaseURL + '/public/api';

export class END_POINTS {

  // api product
  // public static product =   LeenAPI_URL + "/product";
  
  public static product_By_Id =   LeenAPI_URL + "/categoty_product";

  // api all product without action
    public static product_no_action =   LeenAPI_URL + "/all_product";
    public static category_no_action =   LeenAPI_URL + "/all_category"; 


  // api category
  // public static category =   LeenAPI_URL + "/category";

  //api  sign_up
  public static sign_up =   LeenAPI_URL + "/auth/register";
 

}



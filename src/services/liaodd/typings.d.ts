declare namespace API {
  type addOrderUsingPOSTParams = {
    /** total */
    total?: number;
  };

  type AiFrequencyOrder = {
    createTime?: string;
    id?: number;
    isDelete?: number;
    orderStatus?: number;
    price?: number;
    purchaseQuantity?: number;
    totalAmount?: number;
    updateTime?: string;
    userId?: number;
  };

  type AiFrequencyOrderCancelRequest = {
    createTime?: string;
    id?: number;
    orderStatus?: number;
    price?: number;
    purchaseQuantity?: number;
    totalAmount?: number;
    updateTime?: string;
    userId?: number;
  };

  type AiFrequencyOrderQueryRequest = {
    createTime?: string;
    current?: number;
    id?: number;
    orderStatus?: number;
    pageSize?: number;
    price?: number;
    purchaseQuantity?: number;
    sortField?: string;
    sortOrder?: string;
    totalAmount?: number;
    updateTime?: string;
    userId?: number;
  };

  type AiFrequencyOrderUpdateRequest = {
    createTime?: string;
    id?: number;
    orderStatus?: number;
    price?: number;
    purchaseQuantity?: number;
    totalAmount?: number;
    updateTime?: string;
    userId?: number;
  };

  type AiFrequencyOrderVO = {
    createTime?: string;
    id?: number;
    orderStatus?: number;
    price?: number;
    purchaseQuantity?: number;
    totalAmount?: number;
    updateTime?: string;
    userId?: number;
  };

  type AiFrequencyVO = {
    id?: number;
    remainFrequency?: number;
    totalFrequency?: number;
    userId?: number;
  };

  type AlipayInfo = {
    alipayAccountNo?: number;
    alipayId?: string;
    createTime?: string;
    id?: number;
    isDelete?: number;
    orderId?: number;
    payStatus?: number;
    totalAmount?: number;
    updateTime?: string;
    userId?: number;
  };

  type AlipayInfoQueryRequest = {
    alipayAccountNo?: number;
    alipayId?: string;
    createTime?: string;
    current?: number;
    id?: number;
    orderId?: number;
    pageSize?: number;
    payStatus?: number;
    sortField?: string;
    sortOrder?: string;
    totalAmount?: number;
    updateTime?: string;
    userId?: number;
  };

  type BaseResponseAiFrequencyVO_ = {
    code?: number;
    data?: AiFrequencyVO;
    message?: string;
  };

  type BaseResponseBiResponse_ = {
    code?: number;
    data?: BiResponse;
    message?: string;
  };

  type BaseResponseBoolean_ = {
    code?: number;
    data?: boolean;
    message?: string;
  };

  type BaseResponseChart_ = {
    code?: number;
    data?: Chart;
    message?: string;
  };

  type BaseResponseListAiFrequencyOrderVO_ = {
    code?: number;
    data?: AiFrequencyOrderVO[];
    message?: string;
  };

  type BaseResponseListPayInfoVO_ = {
    code?: number;
    data?: PayInfoVO[];
    message?: string;
  };

  type BaseResponseLoginUserVO_ = {
    code?: number;
    data?: LoginUserVO;
    message?: string;
  };

  type BaseResponseLong_ = {
    code?: number;
    data?: number;
    message?: string;
  };

  type BaseResponsePageAiFrequencyOrder_ = {
    code?: number;
    data?: PageAiFrequencyOrder_;
    message?: string;
  };

  type BaseResponsePageAlipayInfo_ = {
    code?: number;
    data?: PageAlipayInfo_;
    message?: string;
  };

  type BaseResponsePageChart_ = {
    code?: number;
    data?: PageChart_;
    message?: string;
  };

  type BaseResponsePageUser_ = {
    code?: number;
    data?: PageUser_;
    message?: string;
  };

  type BaseResponsePageUserVO_ = {
    code?: number;
    data?: PageUserVO_;
    message?: string;
  };

  type BaseResponseUser_ = {
    code?: number;
    data?: User;
    message?: string;
  };

  type BaseResponseUserVO_ = {
    code?: number;
    data?: UserVO;
    message?: string;
  };

  type BiResponse = {
    chartId?: number;
    genChart?: string;
    genResult?: string;
  };

  type Chart = {
    chartData?: string;
    chartStatus?: string;
    chartType?: string;
    createTime?: string;
    execMessage?: string;
    genChart?: string;
    getResult?: string;
    goal?: string;
    id?: number;
    isDelete?: number;
    name?: string;
    updateTime?: string;
    userId?: number;
  };

  type ChartAddRequest = {
    chartData?: string;
    chartType?: string;
    goal?: string;
    name?: string;
  };

  type ChartEditRequest = {
    chartData?: string;
    chartType?: string;
    goal?: string;
    id?: number;
    name?: string;
  };

  type ChartQueryRequest = {
    chartType?: string;
    current?: number;
    goal?: string;
    id?: number;
    name?: string;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    userId?: number;
  };

  type ChartUpdateRequest = {
    chartData?: string;
    chartType?: string;
    createTime?: string;
    genChart?: string;
    getResult?: string;
    goal?: string;
    id?: number;
    isDelete?: number;
    name?: string;
    updateTime?: string;
  };

  type DeleteRequest = {
    id?: number;
  };

  type genChartByAiAsyncMqUsingPOSTParams = {
    chartType?: string;
    goal?: string;
    name?: string;
  };

  type genChartByAiAsyncUsingPOSTParams = {
    chartType?: string;
    goal?: string;
    name?: string;
  };

  type genChartByAiUsingPOSTParams = {
    chartType?: string;
    goal?: string;
    name?: string;
  };

  type getChartByIdCacheUsingGETParams = {
    /** id */
    id?: number;
  };

  type getChartByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getUserByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getUserVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type LoginUserVO = {
    createTime?: string;
    id?: number;
    updateTime?: string;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type OrderItem = {
    asc?: boolean;
    column?: string;
  };

  type PageAiFrequencyOrder_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: AiFrequencyOrder[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageAlipayInfo_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: AlipayInfo[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageChart_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: Chart[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUser_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: User[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUserVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: UserVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PayInfoVO = {
    alipayAccountNo?: number;
    alipayId?: string;
    createTime?: string;
    id?: number;
    orderId?: number;
    payStatus?: number;
    totalAmount?: number;
    updateTime?: string;
    userId?: number;
  };

  type User = {
    createTime?: string;
    id?: number;
    isDelete?: number;
    updateTime?: string;
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userPassword?: string;
    userRole?: string;
  };

  type UserAddRequest = {
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userRole?: string;
  };

  type UserLoginRequest = {
    userAccount?: string;
    userPassword?: string;
  };

  type UserQueryRequest = {
    current?: number;
    id?: number;
    mpOpenId?: string;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    unionId?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserRegisterRequest = {
    checkPassword?: string;
    userAccount?: string;
    userPassword?: string;
  };

  type UserUpdateMyRequest = {
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
  };

  type UserUpdateRequest = {
    id?: number;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserVO = {
    createTime?: string;
    id?: number;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };
}

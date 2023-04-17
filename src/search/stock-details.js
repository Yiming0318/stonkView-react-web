import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {findStockBySymbol} from "../stock/stock-service";
import {useDispatch, useSelector} from "react-redux";
import {userBuyIn} from "../buyIn/buyIn-service";
import {findBuyInByUserId} from "../buyIn/buyIn-service";
import {
  createReviewThunk, findReivewByStockThunk, findReviewByAuthorThunk
} from "../reviews/review-thunks";
import {findReviewByStock, findReviewByAuthor} from "../reviews/reviews-service";


const StockDetailScreen = () => {
  const {searchStockCode} = useParams();
  const [details, setDetails] = useState([]);
  const [buyInList, setBuyInList] = useState([]);
  const {currentUser} = useSelector((state) => state.users);
  const[review, setReview] = useState('');
  // const {allReviews} = useSelector((state) => state.reviews);
  const[allRreviewStock, setAllReviewStock] = useState([]);
  const[allRreviewUser, setAllReviewUser] = useState([]);
  const dispatch = useDispatch();
  const getDetails = async () => {
    const response = await findStockBySymbol(searchStockCode);
    setDetails(response);
  };
  const buyIn = async () => {
    const response = await userBuyIn(currentUser._id, searchStockCode);
    console.log(response);
  };
  const getCurrentUserBuyInList = async () => {
    const response = await findBuyInByUserId(currentUser._id);
    setBuyInList(response);
  };
  const handlePostReviewBtn = () => {
    dispatch(createReviewThunk({
      review,
      searchStockCode,
    }))
  };
  const handleReviewStock = async () => {
    const response = await findReviewByStock(searchStockCode);
    setAllReviewStock(response);
  };
  const handleReivewUser = async () => {
    const response = await findReviewByAuthor(currentUser._id);
    setAllReviewUser(response);
  };
  useEffect(() => {
    getDetails();
    getCurrentUserBuyInList();
    handleReivewUser();
    handleReviewStock();
  }, []);

  return(
      <>
        <h1>Stock details: {searchStockCode}</h1>
        <ul className={"list-group"}>
        {
          details && details.map((detail) => {
            return (
                <>
                <li className={"list-group-item"}>  Ticker: {detail.ticker} </li>
                <li className={"list-group-item"}>  Name: {detail.name} </li>
                <li className={"list-group-item"}>  Exchange Short: {detail.exchange_short}  </li>
                <li className={"list-group-item"}>  Exchange Long: {detail.exchange_long}  </li>
                <li className={"list-group-item"}>  Mic Code: {detail.mic_code}  </li>
                <li className={"list-group-item"}>  Currency: {detail.currency}  </li>
                <li className={"list-group-item"}>  Price: {detail.price}  </li>
                <li className={"list-group-item"}>  Day High: {detail.day_high}  </li>
                <li className={"list-group-item"}>  Day Low: {detail.day_low}  </li>
                <li className={"list-group-item"}>  Day Open: {detail.day_open}  </li>
                <li className={"list-group-item"}>  Market Cap: {detail.market_cap}  </li>
                <li className={"list-group-item"}>  Previous Close Price: {detail.previous_close_price}  </li>
                <li className={"list-group-item"}>  Previous Close Price Time: {detail.previous_close_price_time}  </li>
                <li className={"list-group-item"}>  Day Change: {detail.day_change}  </li>
                <li className={"list-group-item"}>  Volume: {detail.volume}  </li>
                <li className={"list-group-item"}>  Is Extended Hours Price: {detail.is_extended_hours_price}  </li>
                <li className={"list-group-item"}>  Last Trade Time: {detail.last_trade_time} </li>
              </>
            );
          })
        }
        </ul>


        <h1>Current user: { currentUser && currentUser.username}</h1>
        {/*{ currentUser && (<>*/}
        {/*  <button onClick={buyIn} className={"btn btn-success"}>Buy In</button>*/}
        {/*  <button className={"btn btn-danger"}>Sell Out</button>*/}
        {/*  <h1>{currentUser.username}'s buy in advise: </h1>*/}
        {/*  <ul className={"list-group"}>*/}
        {/*  {*/}
        {/*    buyInList && buyInList.map((item) => (*/}
        {/*    <li className={"list-group-item"}>*/}
        {/*      <Link to={`/search/${item.stockId}`}>*/}
        {/*        <div className={"row"}>{item.stockId}</div>*/}
        {/*      </Link>*/}
        {/*    </li>*/}
        {/*    ))*/}
        {/*  }*/}
        {/*  </ul>*/}
        {/*  </>)*/}
        {/*}*/}


        {
          currentUser &&
          <div>
            <h1>Post Your Review: </h1>
            <textarea
                onChange={(e) => setReview(e.target.value)}
                className={"form-control"}> </textarea>
            <button className={"btn btn-primary"} onClick={handlePostReviewBtn}>Post Review</button>

            {/*<pre>*/}
            {/*  {JSON.stringify(allRreviewStock, null, 2)}*/}
            {/*</pre>*/}
            {/*<pre>*/}
            {/*  {JSON.stringify(allRreviewUser, null, 2)}*/}
            {/*</pre>*/}

            <h1>Others Review On: {searchStockCode}</h1>
            <ul className={"list-group"}>
            {
              allRreviewStock && allRreviewStock.map((review) =>
                <li className={"list-group-item"}>
                  {review.review}
                  <div className={"float-end"}>
                    <span className={"fw-bold"}>From user: </span>
                    {review.author.username}
                  </div>
                </li>
                )
            }
            </ul>
            <br/>
            <h1>Your Review Over Other Stocks</h1>
            <ul className={"list-group"}>
              {
                  allRreviewUser && allRreviewUser.map((review) =>
                      <li className={"list-group-item"}>
                        {review.review}
                        <div className={"float-end"}>
                          <span className={"fw-bold"}>For stock: </span>
                          {review.searchStockCode}
                        </div>
                      </li>
                  )
              }
            </ul>
            <br/>
            <br/>
            <br/>
          </div>
        }



      </>
  );
}

export default StockDetailScreen;
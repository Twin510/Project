-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 18, 2024 at 09:20 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `quick_recipe`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_login`
--

CREATE TABLE `admin_login` (
  `a_id` int(5) NOT NULL,
  `a_phone` bigint(10) NOT NULL,
  `a_password` varchar(20) NOT NULL,
  `a_email` varchar(30) NOT NULL,
  `a_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin_login`
--

INSERT INTO `admin_login` (`a_id`, `a_phone`, `a_password`, `a_email`, `a_name`) VALUES
(1, 9912345670, 'Abc@12345', 'pateljanvi102.pj@gmail.com', 'janvi');

-- --------------------------------------------------------

--
-- Table structure for table `cart_item`
--

CREATE TABLE `cart_item` (
  `cart_id` int(30) NOT NULL,
  `f_id` int(30) NOT NULL,
  `m_id` int(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cart_item`
--

INSERT INTO `cart_item` (`cart_id`, `f_id`, `m_id`) VALUES
(1, 6, 17),
(3, 6, 16);

-- --------------------------------------------------------

--
-- Table structure for table `contact_us`
--

CREATE TABLE `contact_us` (
  `f_id` int(5) NOT NULL,
  `f_name` varchar(10) NOT NULL,
  `f_email` varchar(20) NOT NULL,
  `f_phone` varchar(20) NOT NULL,
  `f_dob` date NOT NULL,
  `f_address` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contact_us`
--

INSERT INTO `contact_us` (`f_id`, `f_name`, `f_email`, `f_phone`, `f_dob`, `f_address`) VALUES
(1, 'xnbx', 'aa@a.com', '4633', '2024-01-07', 'qefadD');

-- --------------------------------------------------------

--
-- Table structure for table `favorite_list`
--

CREATE TABLE `favorite_list` (
  `fav_id` int(10) NOT NULL,
  `f_id` int(5) NOT NULL,
  `m_id` int(5) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `feed_id` int(5) NOT NULL,
  `f_id` int(9) NOT NULL,
  `feed_description` varchar(500) NOT NULL,
  `feed_date` date NOT NULL DEFAULT current_timestamp(),
  `m_id` int(10) NOT NULL,
  `f_name` varchar(30) NOT NULL,
  `f_email` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`feed_id`, `f_id`, `feed_description`, `feed_date`, `m_id`, `f_name`, `f_email`) VALUES
(1, 6, 'it was nice', '0000-00-00', 13, 'janvi', 'pateljanvi102.pj@gmail.com'),
(2, 6, 'it was nice', '2024-03-26', 15, 'janvi', 'pateljanvi102.pj@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `manage_category`
--

CREATE TABLE `manage_category` (
  `cat_id` int(10) NOT NULL,
  `cat_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `manage_category`
--

INSERT INTO `manage_category` (`cat_id`, `cat_name`) VALUES
(3, 'punjabi'),
(4, 'chinese'),
(5, 'gujarati'),
(6, 'south indian'),
(7, 'italian'),
(9, 'fastfood');

-- --------------------------------------------------------

--
-- Table structure for table `manage_recipe`
--

CREATE TABLE `manage_recipe` (
  `m_id` int(5) NOT NULL,
  `a_id` int(5) NOT NULL,
  `rec_name` varchar(30) NOT NULL,
  `rec_price` int(150) NOT NULL,
  `rec_ingredients` varchar(200) NOT NULL,
  `rec_description` varchar(500) NOT NULL,
  `rec_image` varchar(500) NOT NULL,
  `choose_category` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `manage_recipe`
--

INSERT INTO `manage_recipe` (`m_id`, `a_id`, `rec_name`, `rec_price`, `rec_ingredients`, `rec_description`, `rec_image`, `choose_category`) VALUES
(6, 0, 'manchurian', 0, 'cabbage , spring oni', ' To make veg manchurian you need grated or minced ', '1707294594918-.jpg', ''),
(8, 0, 'mkxkmxcm', 0, 'mvmcmvm,', 'knnkdnkd', '1707896788653-.jpg', ''),
(10, 0, 'Pizza', 0, 'ehuijsruiwe', 'fgdhsjkladgwhjhfsjdygruiejruh', '1708322717043-.jpg', ''),
(11, 0, 'manchurian', 0, 'drtg', 'xfghgf', '1708413837281-.jpg', 'chimese'),
(12, 0, 'Pizza', 0, 'sert67y8uijhgfrt56t7', 'fghjikolkjhgfrde56tyu', '1708581942709-.jpg', 'italian'),
(13, 0, 'nudels', 0, 'chilli,salt', 'its tastyy', '1709100092265-.jpg', 'chinese'),
(15, 0, 'Pizzaww', 700, 'pizzaawe', 'tasstyyyww', '1709110248301-.jpg', 'italian'),
(16, 0, 'panipuri', 80, 'hghk,hsjc,,xgcgyu,df', 'it is veryyyy tastyy and delicios ..........fSGHBQJN,Nhygtrfdeswswdfrgthyjn  nbvfdertg yhbgfdewazxsdfghjkjhgfdsasxcvbhy6t5r tyhgfdGYGSYGYgySV              DAYGBCUHiugcugcuchcugcggcuwuhduwgygc', '1709531507507-.jpg', 'fastfood'),
(17, 0, 'uttapa', 1200, '2 cups Idli Batter or Dosa Batter (homemade or readymade)\n1 medium Onion, finely chopped (approx. 1/2 cup)\n1/2 cup finely chopped Capsicum, optional\n1/3 cup finely chopped Tomato\n2-3 green chillie', 'In this uttapam recipe I have shown the method of making them with a multi-purpose batter that can be used to make idli and dosa as well. The entire steps of soaking rice and lentils, to grinding and fermenting the batter is shown in detail.As with any fermented batter or dough, temperature plays a crucial role in the fermentation process. So make sure that you keep the batter in a warm place or ferment for a longer time, if the temperature is on the cooler side in your city.\n\nWith this batter', '1710224120844-.jpg', 'south indian');

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `p_id` int(5) NOT NULL,
  `f_id` int(10) NOT NULL,
  `p_date` date NOT NULL DEFAULT current_timestamp(),
  `p_amount` int(5) NOT NULL,
  `r_id` int(8) NOT NULL,
  `m_id` int(5) NOT NULL,
  `pt` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `payment`
--

INSERT INTO `payment` (`p_id`, `f_id`, `p_date`, `p_amount`, `r_id`, `m_id`, `pt`) VALUES
(12, 6, '2024-02-07', 120, 5, 13, 'y'),
(13, 6, '2024-03-12', 200, 9, 17, 'w'),
(14, 6, '2024-03-12', 100, 8, 16, 'm'),
(15, 6, '2024-03-12', 300, 7, 15, 'y'),
(16, 6, '2024-03-12', 200, 9, 17, 'w'),
(17, 6, '2024-03-13', 360, 8, 16, 'y'),
(18, 6, '2024-03-26', 50, 7, 15, 'm'),
(19, 5, '2024-03-26', 360, 5, 13, 'y'),
(20, 6, '2024-03-30', 230, 8, 16, 'w');

-- --------------------------------------------------------

--
-- Table structure for table `rec_plan`
--

CREATE TABLE `rec_plan` (
  `r_id` int(10) NOT NULL,
  `m_id` int(20) NOT NULL,
  `w_price` int(50) NOT NULL,
  `m_price` int(20) NOT NULL,
  `y_price` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `rec_plan`
--

INSERT INTO `rec_plan` (`r_id`, `m_id`, `w_price`, `m_price`, `y_price`) VALUES
(1, 9, 10, 20, 10),
(2, 10, 10, 50, 100),
(3, 11, 10, 50, 100),
(4, 12, 60, 100, 300),
(5, 13, 60, 120, 360),
(6, 14, 60, 100, 300),
(7, 15, 909, 1900, 5000),
(8, 16, 230, 400, 560),
(9, 17, 90, 800, 9000);

-- --------------------------------------------------------

--
-- Table structure for table `reg_foodies`
--

CREATE TABLE `reg_foodies` (
  `f_id` int(5) NOT NULL,
  `f_phone` bigint(10) NOT NULL,
  `f_email` varchar(30) NOT NULL,
  `f_password` varchar(20) NOT NULL,
  `f_dob` date NOT NULL,
  `f_address` varchar(10) NOT NULL,
  `f_name` varchar(20) NOT NULL,
  `f_status` int(3) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `reg_foodies`
--

INSERT INTO `reg_foodies` (`f_id`, `f_phone`, `f_email`, `f_password`, `f_dob`, `f_address`, `f_name`, `f_status`) VALUES
(3, 123456, 'pateljanvi102.pj@gmail.com', '11111111111111111', '2024-01-21', '123333', 'akshar', 1),
(4, 561154, 'hdh@gmail.com', 'hsbfkshhhh', '2024-02-16', 'suqj', 'janvi', 1),
(5, 456789, 'xdgbd@gmail.com', '3456765', '2024-02-16', 'dfhjhfgdfs', 'Twinkal', 1),
(6, 9974951247, 'pateljanvi102.pj@gmail.com', 'Janvi@206', '2024-03-17', 'abc', 'janvi', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_login`
--
ALTER TABLE `admin_login`
  ADD PRIMARY KEY (`a_id`);

--
-- Indexes for table `cart_item`
--
ALTER TABLE `cart_item`
  ADD PRIMARY KEY (`cart_id`);

--
-- Indexes for table `contact_us`
--
ALTER TABLE `contact_us`
  ADD PRIMARY KEY (`f_id`);

--
-- Indexes for table `favorite_list`
--
ALTER TABLE `favorite_list`
  ADD PRIMARY KEY (`fav_id`);

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`feed_id`);

--
-- Indexes for table `manage_category`
--
ALTER TABLE `manage_category`
  ADD PRIMARY KEY (`cat_id`);

--
-- Indexes for table `manage_recipe`
--
ALTER TABLE `manage_recipe`
  ADD PRIMARY KEY (`m_id`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`p_id`);

--
-- Indexes for table `rec_plan`
--
ALTER TABLE `rec_plan`
  ADD PRIMARY KEY (`r_id`);

--
-- Indexes for table `reg_foodies`
--
ALTER TABLE `reg_foodies`
  ADD PRIMARY KEY (`f_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin_login`
--
ALTER TABLE `admin_login`
  MODIFY `a_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `cart_item`
--
ALTER TABLE `cart_item`
  MODIFY `cart_id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `contact_us`
--
ALTER TABLE `contact_us`
  MODIFY `f_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `favorite_list`
--
ALTER TABLE `favorite_list`
  MODIFY `fav_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `feedback`
--
ALTER TABLE `feedback`
  MODIFY `feed_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `manage_category`
--
ALTER TABLE `manage_category`
  MODIFY `cat_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `manage_recipe`
--
ALTER TABLE `manage_recipe`
  MODIFY `m_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `p_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `rec_plan`
--
ALTER TABLE `rec_plan`
  MODIFY `r_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `reg_foodies`
--
ALTER TABLE `reg_foodies`
  MODIFY `f_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

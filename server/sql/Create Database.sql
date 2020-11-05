-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 05, 2020 at 05:39 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sql9374312`
--

-- --------------------------------------------------------

--
-- Table structure for table `ContactMethods`
--

CREATE TABLE `ContactMethods` (
  `id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `update_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `Type` varchar(45) NOT NULL,
  `Value` varchar(45) NOT NULL,
  `IsPrimary` bit(1) NOT NULL DEFAULT b'0',
  `CanSpam` bit(1) NOT NULL DEFAULT b'0',
  `User_id` int(11) NOT NULL,
  `Users_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELATIONSHIPS FOR TABLE `ContactMethods`:
--   `Users_id`
--       `Users` -> `id`
--

--
-- Dumping data for table `ContactMethods`
--

INSERT INTO `ContactMethods` (`id`, `created_at`, `update_at`, `Type`, `Value`, `IsPrimary`, `CanSpam`, `User_id`, `Users_id`) VALUES
(5, '2020-11-04 21:06:13', '2020-11-05 02:06:13', 'email', 'aali@gmail.com', b'0', b'0', 1, 1),
(6, '2020-11-04 21:07:23', '2020-11-05 02:07:23', 'email', 'lalarose@gmail.com', b'0', b'0', 2, 2);

-- --------------------------------------------------------

--
-- Table structure for table `Emojis`
--

CREATE TABLE `Emojis` (
  `id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `update_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `Name` varchar(45) NOT NULL,
  `Description` varchar(2048) NOT NULL,
  `Code` varchar(2) NOT NULL,
  `Type_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELATIONSHIPS FOR TABLE `Emojis`:
--

--
-- Dumping data for table `Emojis`
--

INSERT INTO `Emojis` (`id`, `created_at`, `update_at`, `Name`, `Description`, `Code`, `Type_id`) VALUES
(1, '2020-11-04 21:11:16', '2020-11-05 02:11:16', 'red_heart', 'red heart - U+2764', '❤️', 420),
(2, '2020-11-04 21:14:33', '2020-11-05 02:14:33', 'thumbs_up', 'thumbs up - U+1F44D', '👍', 420);

-- --------------------------------------------------------

--
-- Table structure for table `Exercise`
--

CREATE TABLE `Exercise` (
  `id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `update_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `exercise_type` varchar(2048) NOT NULL,
  `exercise_duration` varchar(2048) NOT NULL,
  `exercise_day` varchar(2048) NOT NULL,
  `exercise_intensity` varchar(2048) NOT NULL,
  `exercise_location` varchar(2048) NOT NULL,
  `exercise_heartrate` varchar(2048) NOT NULL,
  `Owner_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELATIONSHIPS FOR TABLE `Exercise`:
--

--
-- Dumping data for table `Exercise`
--

INSERT INTO `Exercise` (`id`, `created_at`, `update_at`, `exercise_type`, `exercise_duration`, `exercise_day`, `exercise_intensity`, `exercise_location`, `exercise_heartrate`, `Owner_id`) VALUES
(1, '2020-11-04 21:24:18', '2020-11-05 02:24:18', 'Pushups', '20 minutes', 'Monday', 'moderate intensity', 'Gravity Gym', '190bpm', 1),
(2, '2020-11-04 21:25:38', '2020-11-05 02:25:38', 'Running', '20 minutes', 'Wednesday', 'High intensity', 'Park', '195 bpm', 1);

-- --------------------------------------------------------

--
-- Table structure for table `FriendRequests`
--

CREATE TABLE `FriendRequests` (
  `id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `update_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `Owner_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELATIONSHIPS FOR TABLE `FriendRequests`:
--

--
-- Dumping data for table `FriendRequests`
--

INSERT INTO `FriendRequests` (`id`, `created_at`, `update_at`, `Owner_id`) VALUES
(1, '2020-11-04 14:16:12', '2020-11-04 19:17:57', 7),
(2, '2020-11-04 14:18:24', '2020-11-04 19:19:30', 11);

-- --------------------------------------------------------

--
-- Table structure for table `FriendSuggestions`
--

CREATE TABLE `FriendSuggestions` (
  `id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `update_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `User_id` int(11) NOT NULL,
  `exercise_skill_level` varchar(2048) NOT NULL,
  `exercise_duration` varchar(2048) NOT NULL,
  `exercise_type` varchar(2048) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELATIONSHIPS FOR TABLE `FriendSuggestions`:
--

--
-- Dumping data for table `FriendSuggestions`
--

INSERT INTO `FriendSuggestions` (`id`, `created_at`, `update_at`, `User_id`, `exercise_skill_level`, `exercise_duration`, `exercise_type`) VALUES
(1, '2020-11-04 21:18:14', '2020-11-05 02:18:14', 5, 'Beginner', '30 minutes', 'Benchpress'),
(2, '2020-11-04 21:18:46', '2020-11-05 02:18:46', 7, 'Beginner', '30 minutes', 'Treadmill');

-- --------------------------------------------------------

--
-- Table structure for table `Reactions`
--

CREATE TABLE `Reactions` (
  `id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `update_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `Emoji` varchar(2) NOT NULL,
  `Exercise_id` int(11) NOT NULL,
  `Owner_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELATIONSHIPS FOR TABLE `Reactions`:
--

--
-- Dumping data for table `Reactions`
--

INSERT INTO `Reactions` (`id`, `created_at`, `update_at`, `Emoji`, `Exercise_id`, `Owner_id`) VALUES
(1, '2020-11-04 21:16:40', '2020-11-05 02:16:40', '❤️', 1, 2),
(2, '2020-11-04 21:17:13', '2020-11-05 02:17:13', '👍', 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `Types`
--

CREATE TABLE `Types` (
  `id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `update_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `Name` varchar(45) NOT NULL,
  `Type_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELATIONSHIPS FOR TABLE `Types`:
--

--
-- Dumping data for table `Types`
--

INSERT INTO `Types` (`id`, `created_at`, `update_at`, `Name`, `Type_id`) VALUES
(1, '2020-11-04 23:23:00', '2020-11-05 04:23:00', 'Types', 1),
(2, '2020-11-04 23:23:28', '2020-11-05 04:23:28', 'User Types', 1),
(3, '2020-11-04 23:23:49', '2020-11-05 04:23:49', 'Exercise Tyoes', 1),
(4, '2020-11-04 23:24:15', '2020-11-05 04:24:15', 'Contact Method Types', 1),
(5, '2020-11-04 23:24:33', '2020-11-05 04:24:33', 'Admin', 2),
(6, '2020-11-04 23:24:56', '2020-11-05 04:24:56', 'User', 2),
(7, '2020-11-04 23:35:41', '2020-11-05 04:35:41', 'endurance', 3),
(8, '2020-11-04 23:37:23', '2020-11-05 04:37:23', 'strength', 3),
(9, '2020-11-04 23:37:33', '2020-11-05 04:37:33', 'balance', 3),
(10, '2020-11-04 23:37:42', '2020-11-05 04:37:42', 'flexibility', 3),
(11, '2020-11-04 23:38:00', '2020-11-05 04:38:00', 'Email', 4),
(12, '2020-11-04 23:38:09', '2020-11-05 04:38:09', 'Cell Phone', 4),
(20, '2020-11-04 23:38:23', '2020-11-05 04:38:54', 'Emoji Types', 1),
(420, '2020-11-04 23:39:15', '2020-11-05 04:39:15', 'Reactions', 20);

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `update_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `FirstName` varchar(45) NOT NULL,
  `LastName` varchar(45) NOT NULL,
  `DOB` datetime DEFAULT NULL,
  `Password` varchar(45) DEFAULT NULL,
  `User_Type` int(11) NOT NULL,
  `exercise_skill_level` varchar(2048) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELATIONSHIPS FOR TABLE `Users`:
--

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`id`, `created_at`, `update_at`, `FirstName`, `LastName`, `DOB`, `Password`, `User_Type`, `exercise_skill_level`) VALUES
(1, '2020-11-04 20:48:40', '2020-11-05 03:36:10', 'Ayman', 'Ali', '2019-01-09 20:47:50', 'gravitygym', 5, 'Expert'),
(2, '2020-11-04 21:01:03', '2020-11-05 03:36:18', 'Lala', 'Rose', '2019-05-13 21:00:16', 'lalasofly', 6, 'Beginner'),
(3, '2020-11-04 21:20:24', '2020-11-05 03:37:00', 'Chris', 'Winters', '2020-08-05 21:18:54', 'crackthecode', 6, 'Beginner'),
(4, '2020-11-04 21:21:17', '2020-11-05 03:37:04', 'Wiley', 'Jackson', '2020-05-12 21:20:36', 'summerszn', 6, 'Amateur');

-- --------------------------------------------------------

--
-- Table structure for table `User_Followers`
--

CREATE TABLE `User_Followers` (
  `id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `update_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `User_id` int(11) NOT NULL,
  `follower_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELATIONSHIPS FOR TABLE `User_Followers`:
--

--
-- Dumping data for table `User_Followers`
--

INSERT INTO `User_Followers` (`id`, `created_at`, `update_at`, `User_id`, `follower_id`) VALUES
(1, '2020-11-04 13:37:20', '2020-11-04 18:39:38', 2, 25),
(2, '2020-11-04 20:49:44', '2020-11-05 01:49:44', 2, 3);

-- --------------------------------------------------------

--
-- Table structure for table `User_Following`
--

CREATE TABLE `User_Following` (
  `id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `update_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `User_id` int(11) NOT NULL,
  `following_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELATIONSHIPS FOR TABLE `User_Following`:
--

--
-- Dumping data for table `User_Following`
--

INSERT INTO `User_Following` (`id`, `created_at`, `update_at`, `User_id`, `following_id`) VALUES
(1, '2020-11-04 21:01:52', '2020-11-05 02:01:52', 2, 3),
(2, '2020-11-04 21:02:15', '2020-11-05 02:02:15', 3, 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ContactMethods`
--
ALTER TABLE `ContactMethods`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_ContactMethods_Users_idx` (`Users_id`);

--
-- Indexes for table `Emojis`
--
ALTER TABLE `Emojis`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Exercise`
--
ALTER TABLE `Exercise`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `FriendRequests`
--
ALTER TABLE `FriendRequests`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `FriendSuggestions`
--
ALTER TABLE `FriendSuggestions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Reactions`
--
ALTER TABLE `Reactions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Types`
--
ALTER TABLE `Types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `User_Followers`
--
ALTER TABLE `User_Followers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `User_Following`
--
ALTER TABLE `User_Following`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ContactMethods`
--
ALTER TABLE `ContactMethods`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `Emojis`
--
ALTER TABLE `Emojis`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `Exercise`
--
ALTER TABLE `Exercise`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `FriendRequests`
--
ALTER TABLE `FriendRequests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `FriendSuggestions`
--
ALTER TABLE `FriendSuggestions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `Reactions`
--
ALTER TABLE `Reactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `Types`
--
ALTER TABLE `Types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=421;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `User_Followers`
--
ALTER TABLE `User_Followers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `User_Following`
--
ALTER TABLE `User_Following`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `ContactMethods`
--
ALTER TABLE `ContactMethods`
  ADD CONSTRAINT `fk_ContactMethods_Users` FOREIGN KEY (`Users_id`) REFERENCES `Users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

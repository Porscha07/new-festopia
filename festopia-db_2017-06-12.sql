# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.18)
# Database: festopia-db
# Generation Time: 2017-06-12 14:16:50 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table Categories
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Categories`;

CREATE TABLE `Categories` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL DEFAULT '',
  `Date` date NOT NULL,
  `Location` varchar(255) NOT NULL DEFAULT '',
  `linkUrl` varchar(255) NOT NULL DEFAULT '',
  `Free` varchar(255) NOT NULL DEFAULT '',
  `Family` varchar(255) NOT NULL DEFAULT '',
  `Category` varchar(255) NOT NULL DEFAULT '',
  `imgUrl` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `Categories` WRITE;
/*!40000 ALTER TABLE `Categories` DISABLE KEYS */;

INSERT INTO `Categories` (`id`, `Name`, `Date`, `Location`, `linkUrl`, `Free`, `Family`, `Category`, `imgUrl`)
VALUES
	(1,'Music Midtown','2017-09-16','Atlanta,GA','https://www.musicmidtown.com/','1','1','Music','https://www.musicmidtown.com/wp-www-musicmidtown-com/wp/wp-content/uploads/2016/06/logo.png'),
	(2,'One MusicFest','2017-09-07','Atlanta,GA','http://www.onemusicfest.com/','0','1','Music','https://static1.squarespace.com/static/548230dee4b0d888e3a1afd7/558b85dae4b004a95293310b/558b87bde4b084bef1cb3600/1435207615999/omf+logo.jpg?format=1000w'),
	(3,'SweetWater 420 Fest','2017-04-21','Atlanta,GA','http://www.sweetwater420fest.com/','0','0','Music','https://upload.wikimedia.org/wikipedia/en/e/ef/SweetWater_420_Fest_Logo.png'),
	(4,'Shaky Beats Music Festival','2017-05-05','Atlanta,GA','https://www.shakybeatsfestival.com/','0','1','Music','https://pbs.twimg.com/profile_images/798009546736365568/rtt5yuTS.jpg'),
	(5,'A3C Festival','2017-10-07','Atlanta,GA','http://www.a3cfestival.com/festival','0','1','Music','http://fusicology.com/justfuseit/wp-content/uploads/2012/03/a3c.jpg'),
	(6,'Piedmont Park Arts Festival','2017-08-19','Atlanta,GA','http://piedmontparkartsfestival.com/','0','1','Art','http://piedmontparkartsfestival.com/wp-content/uploads/pp/images/logo_1409753659.jpg'),
	(7,'Atlanta Dogwood Festival','2017-04-07','Atlanta,GA','http://www.dogwood.org/','0','1','Art','http://www.artfaircalendar.com/.a/6a00e54fba8a73883301b7c74e70f1970b-320wi'),
	(8,'Decatur Arts Festival','2017-05-27','Decatur,GA','http://decaturartsfestival.com/festival/','0','1','Art','https://i1.wp.com/www.decaturmetro.com/wp-content/uploads/2017/05/0-67.jpeg?fit=234%2C215'),
	(9,'Callanwolde Arts Festival','2018-01-20','Atlanta,GA','http://callanwoldeartsfestival.com/','1','1','Art','http://callanwoldeartsfestival.com/wp-content/uploads/pp/images/logo_1409753311.jpg'),
	(10,'Virginia-Higland Summerfest','2017-06-03','Atlanta,GA','https://vahi.org/summerfest/','1','1','Art','http://callanwoldeartsfestival.com/wp-content/uploads/pp/images/logo_1409753311.jpg'),
	(11,'Taste of Atlanta','2017-10-22','Atlanta,GA','http://www.tasteofatlanta.com/','1','1','Food','http://diningout.com/atlanta/wp-content/uploads/sites/15/2015/03/toa-logo.jpg'),
	(12,'Atlanta Summer BeerFest','2017-06-17','Atlanta,GA','http://www.atlantasummerbeerfest.com/','1','0','Food','https://www.xorbia.com/img/accounts/73/event/ASBF%202016%20Square%20Logo2.jpg'),
	(13,'Slingin Wings Festival','2017-05-20','Atlanta,GA','https://www.slinginwingsfestival.com/','1','1','Food','http://www2.atlanta.net/whatshot/images2/slingn-wings-festival.jpg'),
	(14,'Atlanta Spring Wine Festival','2017-04-15','Atlanta,GA','http://atlantawineparty.com/events/','1','1','Food','https://www.xorbia.com/img/accounts/73/event/atlantaspringwinefest_650.jpg'),
	(15,'Atlanta Brunch Festival','2017-03-11','Atlanta,GA','http://atlantabrunchfestival.com/','1','1','Food','https://www.xorbia.com/img/accounts/73/event/atl-brunch-fest.jpg'),
	(16,'Atlanta Film Festival','2017-03-24','Atlanta,GA','http://atlantafilmfestival.com/','0','1','Film','http://static1.squarespace.com/static/517ebeaae4b01eeb7ae91027/t/5908df70d482e90d12b05bab/1493928565587/?format=1500w'),
	(17,'Atlanta shortsFest','2017-07-07','Atlanta,GA','http://www.atlantashortsfest.com/','0','1','Film','http://nebula.wsimg.com/7f467940a5a1c1b33fa3c7d3fe7b8442?AccessKeyId=4372D5B8C4693FF7CE95&disposition=0&alloworigin=1'),
	(18,'BronzeLens Film Festival','2017-08-23','Atlanta,GA','http://bronzelens.com/get-passes/','0','1','Film','https://festagent.com/system/festivals/logos/000/000/944/medium/BronzeLens_Film_Festival_440.jpg?1447552432'),
	(19,'Atlanta Jewish Film Festival','2018-01-24','Atlanta,GA','http://ajff.org/festival','1','1','Film','https://s3.amazonaws.com/ticketalternative-assets/events/images/000/004/397/original/AJFF_horiz_blueBG_color-450x225.gif?1451592082'),
	(20,'Cinema Italy Film Festival','2017-04-21','Atlanta,GA','https://www.cinemaitaly.com/atlanta/','1','1','Film','http://www.soflanights.com/wp-content/uploads/2013/09/CINEMA-ITALY_Logo.jpg'),
	(21,'Marietta Greek Festival','2017-05-19','Marietta,GA','http://mariettagreekfestival.com/the-festival/','0','1','Culture','http://allaboutatlantahomes.com/wp-content/uploads/2016/04/2016-Marietta-Greek-Festival.jpg'),
	(22,'Georgia Renaissance Festival','2017-04-15','Fairburn,GA','https://www.garenfest.com/','1','1','Culture','http://s3.amazonaws.com/product-images.imshopping.com/nimblebuy/georgia-renaissance-festival-2016-7085882-regular.jpg'),
	(23,'Malcolm X Festival','2017-05-19','Atlanta,GA','http://malcolmxfestival.com/faq','0','1','Culture','http://www.thekemeticempire.com/wp-content/uploads/2015/02/malcolm-X-poster-2016-small.jpg'),
	(24,'Atlanta Arab Festival','2017-04-22','Atlanta,GA','http://www.alifinstitute.org/index.php/events-programs/atlanta-arab-festival','0','1','Culture','https://www.facebook.com/Alif.Institute/photos/a.411456528881243.115506.164031893623709/1758976967462519/?type=3'),
	(25,'Caribbean Culture Festival','2017-06-17','Atlanta,GA','http://www.caribbeangeorgia.org/events/','0','1','Culture','https://www.prlog.org/12570076-atlanta-caribbean-cultural-festival.jpg');

/*!40000 ALTER TABLE `Categories` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

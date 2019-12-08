-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema eventdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `eventdb` ;

-- -----------------------------------------------------
-- Schema eventdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `eventdb` DEFAULT CHARACTER SET utf8 ;
USE `eventdb` ;

-- -----------------------------------------------------
-- Table `game`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `game` ;

CREATE TABLE IF NOT EXISTS `game` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `description` VARCHAR(1000) NULL DEFAULT NULL,
  `developer` VARCHAR(45) NULL DEFAULT NULL,
  `platform` VARCHAR(45) NULL DEFAULT NULL,
  `release_date` DATE NULL DEFAULT NULL,
  `completed` TINYINT(4) NULL DEFAULT NULL,
  `hours_to_complete` DOUBLE NULL DEFAULT NULL,
  `img_url` VARCHAR(500) NULL DEFAULT NULL,
  `genre` VARCHAR(30) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 8
DEFAULT CHARACTER SET = utf8;

SET SQL_MODE = '';
DROP USER IF EXISTS eventuser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'eventuser'@'localhost' IDENTIFIED BY 'eventuser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'eventuser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `game`
-- -----------------------------------------------------
START TRANSACTION;
USE `eventdb`;
INSERT INTO `game` (`id`, `name`, `description`, `developer`, `platform`, `release_date`, `completed`, `hours_to_complete`, `img_url`, `genre`) VALUES (1, 'Astral Chain', 'Astral Chain is an action-adventure game where the player assumes the role of a detective from the \"Neuron\" special police task force, who are tasked with solving cases and investigating incidents that take place in \"The Ark\", the game\'s main world.', 'PlatinumGames', 'Nintendo Switch', '2019-08-30', 0, null, 'https://giantbomb1.cbsistatic.com/uploads/scale_super/8/82063/3124243-2789599912-cover.jpg', 'hack-and-slash');
INSERT INTO `game` (`id`, `name`, `description`, `developer`, `platform`, `release_date`, `completed`, `hours_to_complete`, `img_url`, `genre`) VALUES (2, 'Dragon\'s Dogma', 'Dragon\'s Dogma is an action role-playing game set in an open world environment and played from a third-person perspective. The player is able to select between various vocations: Fighter, Strider, Mage, Warrior, Mystic Knight, Ranger, Assassin, Sorcerer and Magic Archer.', 'Capcom', 'Playstation 4', '2012-05-22', 1, 89.4, 'https://s1.gaming-cdn.com/images/products/1182/orig/dragons-dogma-dark-arisen-cover.jpg', 'hack-and-slash');
INSERT INTO `game` (`id`, `name`, `description`, `developer`, `platform`, `release_date`, `completed`, `hours_to_complete`, `img_url`, `genre`) VALUES (3, 'Skate 3', 'Skate 3 is a skateboarding extreme sports game set in an open world environment and played from a third-person perspective. The game takes place in the fictional city of Port Carverton, which embraces skateboarding, unlike the skateboarding is a crime\" mentality portrayed in the second game.\"', 'EA Black Box', 'Xbox 360', '2010-05-11', 0, 0, 'https://upload.wikimedia.org/wikipedia/en/8/84/Skate-3-Boxart.jpg', 'extreme sports');
INSERT INTO `game` (`id`, `name`, `description`, `developer`, `platform`, `release_date`, `completed`, `hours_to_complete`, `img_url`, `genre`) VALUES (4, 'Dark Souls III', 'Dark Souls III is an action role-playing game played in a third-person perspective, similar to previous games in the series.', 'FromSoftware', 'PlayStation 4', '2016-04-12', 1, 52.5, 'https://upload.wikimedia.org/wikipedia/en/b/bb/Dark_souls_3_cover_art.jpg', 'action RPG');
INSERT INTO `game` (`id`, `name`, `description`, `developer`, `platform`, `release_date`, `completed`, `hours_to_complete`, `img_url`, `genre`) VALUES (5, 'The Legend of Zelda: Breath of the Wild', 'Breath of the Wild is an action-adventure game set in an open world environment where players are tasked with exploring the kingdom of Hyrule while controlling Link.', 'Nintendo', 'Nintendo Switch', '2017-03-03', 1, 64, 'https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg', 'action adventure');
INSERT INTO `game` (`id`, `name`, `description`, `developer`, `platform`, `release_date`, `completed`, `hours_to_complete`, `img_url`, `genre`) VALUES (6, 'Sunset Overdrive', 'The player controls an employee of FizzCo, who has to fight off the OD, short for Overcharge Drinkers: humans who have turned into mutants after drinking FizzCo\'s energy drink beverage. In the dystopian Sunset City the player character can wall-run, use zip-lines, and grind rails to swiftly navigate through it, with a large arsenal of weapons to use.', 'Insomniac Games', 'Microsoft Windows', '2014-10-28', 1, 36.8, 'https://upload.wikimedia.org/wikipedia/en/4/46/Sunset_Overdrive_cover.jpg', 'action adventure');
INSERT INTO `game` (`id`, `name`, `description`, `developer`, `platform`, `release_date`, `completed`, `hours_to_complete`, `img_url`, `genre`) VALUES (7, 'Fire Emblem: Shadow Dragon', 'Fire Emblem: Shadow Dragon is a tactical role-playing game where players take control of main protagonist Marth and his army on missions across the continent of Archanea.', 'Intelligent Systems', 'Nintendo DS', '2009-02-16', 1, 26.7, 'https://upload.wikimedia.org/wikipedia/en/9/9b/Fire_Emblem_DS.jpg', 'tactical RPG');

COMMIT;


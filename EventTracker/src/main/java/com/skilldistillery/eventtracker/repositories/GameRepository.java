package com.skilldistillery.eventtracker.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.eventtracker.entities.Game;

public interface GameRepository extends JpaRepository<Game, Integer> {
	List<Game> findByNameLike(String name);

}

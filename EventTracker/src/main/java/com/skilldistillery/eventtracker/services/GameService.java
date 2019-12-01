package com.skilldistillery.eventtracker.services;

import java.util.List;

import com.skilldistillery.eventtracker.entities.Game;

public interface GameService {
	List<Game> listAllGames ();
	Game getGame(int id);
	Game addGame(Game game);
	Game updateGame(int id, Game game);
	boolean deleteGame(int id);
	List<Game> getGamesByKeyword(String keyword);
}

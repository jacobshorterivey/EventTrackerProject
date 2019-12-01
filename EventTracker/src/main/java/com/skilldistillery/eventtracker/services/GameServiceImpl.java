package com.skilldistillery.eventtracker.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.eventtracker.entities.Game;
import com.skilldistillery.eventtracker.repositories.GameRepository;

@Service
public class GameServiceImpl implements GameService{
	@Autowired
	private GameRepository repo;

	@Override
	public List<Game> listAllGames() {
		return repo.findAll();
	}

	@Override
	public Game getGame(int id) {
		Game game = null;
		Optional<Game> opt = repo.findById(id);
		if(opt.isPresent()) {
			game = opt.get();
		}
		return game;
	}
	
	@Override
	public List<Game> getGamesByKeyword(String keyword) {
		keyword = "%" + keyword + "%";
		return repo.findByNameLike(keyword);
	}

	@Override
	public Game addGame(Game game) {
		repo.saveAndFlush(game);
		return game;
	}

	@Override
	public Game updateGame(int id, Game userGame) {
		Game dbGame = null;
		Optional<Game> opt = repo.findById(id);
		if (opt.isPresent()) {
			dbGame = opt.get();
			if (userGame.getName() != null && userGame.getName() != "") {
				dbGame.setName(userGame.getName());
			}
			dbGame.setDescription(userGame.getDescription());
			dbGame.setDeveloper(userGame.getDeveloper());
			dbGame.setPlatform(userGame.getPlatform());
			dbGame.setCompleted(userGame.getCompleted());
			dbGame.setHoursToComplete(userGame.getHoursToComplete());
			dbGame.setImgUrl(userGame.getImgUrl());
			dbGame.setGenre(userGame.getGenre());
		}
		repo.saveAndFlush(dbGame);
		return dbGame;
	}

	@Override
	public boolean deleteGame(int id) {
		boolean deleted = false;
		if(repo.existsById(id)) {
			repo.deleteById(id);
			deleted = true;
		}
		return deleted;
	}

}

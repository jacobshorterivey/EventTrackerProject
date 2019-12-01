package com.skilldistillery.eventtracker.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.eventtracker.entities.Game;
import com.skilldistillery.eventtracker.services.GameService;

@RestController
@RequestMapping("api")
public class GameController {
	@Autowired
	private GameService svc;

	@GetMapping("games")
	public List<Game> listAll() {
		return svc.listAllGames();
	}

	@GetMapping("games/search/{keyword}")
	public List<Game> listByKeyword(@PathVariable String keyword) {
		return svc.getGamesByKeyword(keyword);
	}

	@GetMapping("games/{id}")
	public Game show(@PathVariable int id, HttpServletResponse resp) {
		Game game = svc.getGame(id);
		if (game == null) {
			resp.setStatus(404);
		}
		return game;
	}

	@PostMapping("games")
	public Game create(@RequestBody Game game, HttpServletRequest req, HttpServletResponse resp) {
		try {
			game = svc.addGame(game);
			resp.setStatus(201);
			StringBuffer url = req.getRequestURL();
			url.append("/").append(game.getId());
			resp.addHeader("Location", url.toString());
		} catch (Exception e) {
			e.printStackTrace();
			resp.setStatus(400);
			return null;
		}
		return game;
	}
	@PutMapping("games/{id}")
	public Game update(@PathVariable int id, @RequestBody Game game, HttpServletRequest req, HttpServletResponse resp) {
		try {
			game = svc.updateGame(id, game);
			resp.setStatus(202);
		} catch (Exception e) {
			e.printStackTrace();
			resp.setStatus(400);
		}
		return game;
	}

	@DeleteMapping(path = "games/{id}")
	public void delete(@PathVariable Integer id, HttpServletRequest req, HttpServletResponse resp) {
		boolean deleted = svc.deleteGame(id);
		try {
			if (deleted) {
				resp.setStatus(204);
			} else {
				resp.setStatus(404);
			}
		} catch (Exception e1) {
			e1.printStackTrace();
			resp.setStatus(400);
		}

	}
}

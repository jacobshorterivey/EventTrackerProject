package com.skilldistillery.eventtracker.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Game {
	// FIELDS
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String name;

	private String description;

	private String developer;

	private String platform;

	@Column(name = "release_date")
	private Date releaseDate;
	
	private boolean completed;
	
	@Column(name = "hours_to_complete")
	private Double hoursToComplete;
	
	@Column(name = "img_url")
	private String imgUrl;
	
	private String genre;
	
	// CONTSRUCTORS

	public Game(String name, String description, String developer, String platform, Date releaseDate, boolean completed,
			Double hoursToComplete, String imgUrl, String genre) {
		super();
		this.name = name;
		this.description = description;
		this.developer = developer;
		this.platform = platform;
		this.releaseDate = releaseDate;
		this.completed = completed;
		this.hoursToComplete = hoursToComplete;
		this.imgUrl = imgUrl;
		this.genre = genre;
	}
	public Game() {
		super();
	}
	// GETTERS, SETTERS, EQUALS, TOSTRING
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getDeveloper() {
		return developer;
	}
	public void setDeveloper(String developer) {
		this.developer = developer;
	}
	public String getPlatform() {
		return platform;
	}
	public void setPlatform(String platform) {
		this.platform = platform;
	}
	public Date getReleaseDate() {
		return releaseDate;
	}
	public void setReleaseDate(Date releaseDate) {
		this.releaseDate = releaseDate;
	}
	public boolean isCompleted() {
		return completed;
	}
	public void setCompleted(boolean completed) {
		this.completed = completed;
	}
	public Double getHoursToComplete() {
		return hoursToComplete;
	}
	public void setHoursToComplete(Double hoursToComplete) {
		this.hoursToComplete = hoursToComplete;
	}
	public String getImgUrl() {
		return imgUrl;
	}
	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}
	public String getGenre() {
		return genre;
	}
	public void setGenre(String genre) {
		this.genre = genre;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Game other = (Game) obj;
		if (id != other.id)
			return false;
		return true;
	}
	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Game [id=").append(id).append(", name=").append(name).append(", description=")
				.append(description).append(", developer=").append(developer).append(", platform=").append(platform)
				.append(", releaseDate=").append(releaseDate).append(", completed=").append(completed)
				.append(", hoursToComplete=").append(hoursToComplete).append(", imgUrl=").append(imgUrl)
				.append(", genre=").append(genre).append("]");
		return builder.toString();
	}
	
}

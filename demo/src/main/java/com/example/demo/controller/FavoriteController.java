package com.example.demo.controller;

import com.example.demo.entity.Favorite;
import com.example.demo.service.IFavoriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.stereotype.Controller;

import java.util.List;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author demo
 * @since 2024-09-12
 */
@Controller
@RequestMapping("/favorite")
public class FavoriteController {
    @Autowired
    private IFavoriteService favoriteService;

    // Create a new favorite
    @PostMapping
    public boolean createFavorite(@RequestBody Favorite favorite) {
        Favorite temp  = getFavoriteById(favorite.getFavoriteId());
        if (temp != null) {
            return false;
        }

        return favoriteService.save(favorite);
    }

    // Get a favorite by ID
    @GetMapping("/{id}")
    public Favorite getFavoriteById(@PathVariable Integer id) {
        return favoriteService.getById(id);
    }

    // Get all favorites
    @GetMapping
    public List<Favorite> getAllFavorites() {
        return favoriteService.list();
    }

    @GetMapping("/user/{id}")
    public List<Favorite> getUserAllFavorites(@PathVariable Integer id) {
        List<Favorite> favorites = getAllFavorites();
        favorites.removeIf(favorite -> !favorite.getUserId().equals(id));
        return favorites;
    }

    // Update an existing favorite
    @PutMapping("/{id}")
    public boolean updateFavorite(@PathVariable Integer id, @RequestBody Favorite favorite) {
        favorite.setFavoriteId(id);
        return favoriteService.updateById(favorite);
    }

    // Delete a favorite by ID
    @DeleteMapping("/{id}")
    public boolean deleteFavorite(@PathVariable Integer id) {
        return favoriteService.removeById(id);
    }
}

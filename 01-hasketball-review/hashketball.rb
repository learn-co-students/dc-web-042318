require 'pry'

def game_hash
  {
    home: {
      team_name: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: [
        {
          player_name: "Alan Anderson",
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slam_dunks: 1
        }, {
          player_name: "Reggie Evans",
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slam_dunks: 7
        }, {
          player_name: "Brook Lopez",
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slam_dunks: 15
        }, {
          player_name: "Mason Plumlee",
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slam_dunks: 5
        }, {
          player_name: "Jason Terry",
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slam_dunks: 1
        }
      ]
    },
    away: {
      team_name: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: [
        {
          player_name: "Jeff Adrien",
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slam_dunks: 2
        }, {
          player_name: "Bismak Biyombo",
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slam_dunks: 10
        }, {
          player_name: "DeSagna Diop",
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slam_dunks: 5
        }, {
          player_name: "Ben Gordon",
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slam_dunks: 0
        }, {
          player_name: "Brendan Haywood",
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slam_dunks: 12
        }
      ]
    }
  }
end

def num_points_scored(player_name)
  # find out all the players
  # find which player has player_name
  # return the points for that player
  players = get_players
  player = get_player_by_name(player_name, players)
  # [[home players], [away players]]
  # [all the players]
  player.fetch(:points)
end


def shoe_size(player_name)
  # find out all the players
  # player = players.find {|p| p[:player_name] == player_name}
  # find which player has player_name
  # return the shoe for that player
  players = get_players
  player = get_player_by_name(player_name, players)
  player.fetch(:shoe)
end

def get_players
  game_hash.map do |location, team_data|
    team_data[:players]
  end.flatten
  # game_hash.map {|l, d| d[:players]}.flatten
end

def get_player_by_name(player_name, players)
  players.find {|p| p[:player_name] == player_name}
end

def big_shoe_rebounds
  # First, find the player with the largest shoe size
  # Then, return that player's number of rebounds
  player = get_players.max_by { |player| player.fetch(:shoe) }
  player.fetch(:rebounds)
  # size = 0
  # rebound = 0
  # get_players.each do |player|
  #   if player[:shoe] > size
  #     size = player.fetch(:shoe)
  #     rebound = player.fetch(:rebounds)
  #   end
  # end
  # rebound
end
